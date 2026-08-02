import {
  AfterViewInit,
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
} from '@angular/core';
import { whenInView } from '../utils/when-in-view';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private safetyTimer = 0;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const reduceMotion =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      node.classList.add('reveal', 'is-visible');
      return;
    }

    node.classList.add('reveal');

    this.zone.runOutsideAngular(() => {
      this.observer = whenInView(node, () => {
        this.zone.run(() => node.classList.add('is-visible'));
      });
    });

    // Fallback only if the node is already on screen but IO missed it.
    this.safetyTimer = window.setTimeout(() => {
      if (node.classList.contains('is-visible')) {
        return;
      }
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        node.classList.add('is-visible');
      }
    }, 2000);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.clearTimeout(this.safetyTimer);
  }
}
