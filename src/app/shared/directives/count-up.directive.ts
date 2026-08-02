import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from '@angular/core';
import { resolveInViewTarget, whenInView } from '../utils/when-in-view';

interface CompactScale {
  divisor: number;
  unit: string;
  decimals: number;
}

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnChanges, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);

  @Input({ alias: 'appCountUp', required: true }) target!: number;
  @Input() countPrefix = '';
  @Input() countSuffix = '';
  @Input() countDuration = 1400;
  @Input() countDecimals = 0;
  /** When false, always show full integer count (percentages, weeks). */
  @Input() countSeparator = true;
  /** Compact M / K scaling for large money values. */
  @Input() countCompact = true;

  private observer?: IntersectionObserver;
  private frameId = 0;
  private started = false;
  private hasEntered = false;
  private safetyTimer = 0;

  ngAfterViewInit(): void {
    this.render(0);

    const target = resolveInViewTarget(this.el.nativeElement);
    this.zone.runOutsideAngular(() => {
      this.observer = whenInView(target, () => this.enter());
    });

    this.safetyTimer = window.setTimeout(() => {
      if (this.hasEntered) {
        return;
      }
      const rect = this.el.nativeElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        this.enter();
      }
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['target'] || changes['target'].firstChange) {
      return;
    }

    this.started = false;
    cancelAnimationFrame(this.frameId);
    this.render(0);

    if (this.hasEntered) {
      this.animate();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frameId);
    window.clearTimeout(this.safetyTimer);
  }

  private enter(): void {
    if (this.hasEntered) {
      return;
    }
    this.hasEntered = true;
    this.zone.run(() => this.animate());
  }

  private scale(): CompactScale | null {
    if (!this.countCompact || !this.countSeparator) {
      return null;
    }

    const abs = Math.abs(this.target);

    if (abs >= 1_000_000) {
      return {
        divisor: 1_000_000,
        unit: 'M',
        decimals: this.decimalsFor(abs / 1_000_000),
      };
    }

    if (abs >= 1_000) {
      return {
        divisor: 1_000,
        unit: 'K',
        decimals: this.decimalsFor(abs / 1_000),
      };
    }

    return null;
  }

  private decimalsFor(scaled: number): number {
    if (Number.isInteger(scaled)) {
      return 0;
    }

    const onePlace = Math.round(scaled * 10) / 10;
    return Math.abs(onePlace - scaled) < 1e-9 ? 1 : 2;
  }

  private animate(): void {
    if (this.started) {
      return;
    }

    this.started = true;
    cancelAnimationFrame(this.frameId);

    const reduceMotion =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      this.render(this.target);
      return;
    }

    const scale = this.scale();
    const from = 0;
    const to = scale ? this.target / scale.divisor : this.target;
    const start = performance.now();
    const duration = scale
      ? Math.min(this.countDuration, 1100)
      : this.countDuration;

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;
      this.renderScaled(current, scale);
      if (progress < 1) {
        this.frameId = requestAnimationFrame(tick);
      } else {
        this.renderScaled(to, scale);
      }
    };

    this.frameId = requestAnimationFrame(tick);
  }

  private render(rawValue: number): void {
    const scale = this.scale();
    if (scale) {
      this.renderScaled(rawValue / scale.divisor, scale);
      return;
    }

    const formatted = this.countSeparator
      ? rawValue.toLocaleString('en-US', {
          minimumFractionDigits: this.countDecimals,
          maximumFractionDigits: this.countDecimals,
        })
      : rawValue.toFixed(this.countDecimals);

    this.el.nativeElement.textContent = `${this.countPrefix}${formatted}${this.countSuffix}`;
  }

  private renderScaled(scaledValue: number, scale: CompactScale | null): void {
    if (!scale) {
      const formatted = this.countSeparator
        ? Math.round(scaledValue).toLocaleString('en-US')
        : scaledValue.toFixed(this.countDecimals);

      this.el.nativeElement.textContent = `${this.countPrefix}${formatted}${this.countSuffix}`;
      return;
    }

    const formatted = scaledValue.toLocaleString('en-US', {
      minimumFractionDigits: scale.decimals,
      maximumFractionDigits: scale.decimals,
    });

    this.el.nativeElement.textContent = `${this.countPrefix}${formatted}${scale.unit}${this.countSuffix}`;
  }
}
