import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { BUDGET_CONTENT } from '../../../../core/content/budget.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
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

  readonly content = BUDGET_CONTENT;
  readonly hook = SECTION_HOOKS.budget;
  readonly visual = SECTION_VISUALS.budget;
  chartActive = false;
  hoveredIndex: number | null = null;

  readonly segments: ChartSegment[] = (() => {
    let cursor = 0;
    return this.content.items.map((item, index) => {
      const segment: ChartSegment = {
        ...item,
        dashOffset: 25 - cursor,
        delay: 0.12 + index * 0.12,
      };
      cursor += item.percentage;
      return segment;
    });
  })();

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
