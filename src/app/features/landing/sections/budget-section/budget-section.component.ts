import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  computed,
  inject,
} from '@angular/core';
import { BUDGET_CONTENT } from '../../../../core/content/budget.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { whenInView } from '../../../../shared/utils/when-in-view';
import { EGP_PER_USD, usdToEgp } from '../../../../core/utils/money.util';
import { PmbokLadderComponent } from './pmbok-ladder/pmbok-ladder.component';

interface ChartSegment {
  category: string;
  amount: number;
  percentage: number;
  color: string;
  dashOffset: number;
  delay: number;
}

@Component({
  selector: 'app-budget-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    CountUpDirective,
    PmbokLadderComponent,
  ],
  templateUrl: './budget-section.component.html',
  styleUrl: './budget-section.component.scss',
})
export class BudgetSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('distributionPanel') distributionPanel?: ElementRef<HTMLElement>;

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly zone = inject(NgZone);
  private readonly language = inject(LanguageService);

  readonly content = computed(() => BUDGET_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].budget);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].budget);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
  readonly budgetLead = computed(() => this.content().lead);
  readonly segments = computed<ChartSegment[]>(() => {
    let cursor = 0;
    return this.content().items.map((item, index) => {
      const segment: ChartSegment = {
        ...item,
        dashOffset: 25 - cursor,
        delay: 0.12 + index * 0.12,
      };
      cursor += item.percentage;
      return segment;
    });
  });

  chartActive = false;
  hoveredIndex: number | null = null;
  readonly egpPerUsd = EGP_PER_USD;

  private observer?: IntersectionObserver;

  toEgp(usd: number): number {
    return usdToEgp(usd);
  }

  ngAfterViewInit(): void {
    const node = this.distributionPanel?.nativeElement;
    if (!node) {
      return;
    }

    // Observe the chart panel itself so the ring animates when it is on screen.
    this.zone.runOutsideAngular(() => {
      this.observer = whenInView(node, () => {
        this.zone.run(() => {
          this.chartActive = true;
          this.cdr.detectChanges();
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setHover(index: number | null): void {
    this.hoveredIndex = index;
  }
}
