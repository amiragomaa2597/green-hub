import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
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
import { resolveInViewTarget, whenInView } from '../../../../shared/utils/when-in-view';

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
  ],
  templateUrl: './budget-section.component.html',
  styleUrl: './budget-section.component.scss',
})
export class BudgetSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('distributionPanel') distributionPanel?: ElementRef<HTMLElement>;

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly language = inject(LanguageService);

  readonly content = computed(() => BUDGET_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].budget);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].budget);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
  readonly budgetLead = computed(() => {
    const c = this.content();
    const labels = this.ui();
    return `${labels.timeline}: ${c.duration} · ${labels.startDate}: ${c.startDate} · ${labels.finishDate}: ${c.finishDate}`;
  });
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

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.distributionPanel?.nativeElement;
    if (!node) {
      return;
    }

    const target = resolveInViewTarget(node);
    this.observer = whenInView(target, () => {
      this.chartActive = true;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setHover(index: number | null): void {
    this.hoveredIndex = index;
  }
}
