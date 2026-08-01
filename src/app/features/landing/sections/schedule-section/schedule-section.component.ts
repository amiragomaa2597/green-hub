import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { SCHEDULE_CONTENT } from '../../../../core/content/schedule.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { whenInView } from '../../../../shared/utils/when-in-view';
import { WbsJourneyComponent } from './wbs-journey/wbs-journey.component';

@Component({
  selector: 'app-schedule-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
    CountUpDirective,
    WbsJourneyComponent,
  ],
  templateUrl: './schedule-section.component.html',
  styleUrl: './schedule-section.component.scss',
})
export class ScheduleSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ganttPanel') ganttPanel?: ElementRef<HTMLElement>;

  private readonly cdr = inject(ChangeDetectorRef);

  readonly content = SCHEDULE_CONTENT;
  readonly hook = SECTION_HOOKS.schedule;
  readonly visual = SECTION_VISUALS.schedule;
  ganttActive = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.ganttPanel?.nativeElement;
    if (!node) {
      return;
    }

    this.observer = whenInView(node, () => {
      this.ganttActive = true;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  barLeft(start: number): number {
    return ((start - 1) / this.content.totalWeeks) * 100;
  }

  barWidth(start: number, end: number): number {
    return ((end - start + 1) / this.content.totalWeeks) * 100;
  }
}
