import { Component, computed, inject } from '@angular/core';
import { WBS_CONTENT } from '../../../../core/content/wbs.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { WbsJourneyComponent } from '../schedule-section/wbs-journey/wbs-journey.component';

@Component({
  selector: 'app-wbs-section',
  standalone: true,
  imports: [RevealOnScrollDirective, WbsJourneyComponent, SectionMediaComponent],
  templateUrl: './wbs-section.component.html',
  styleUrl: './wbs-section.component.scss',
})
export class WbsSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => WBS_CONTENT[this.language.lang()]);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].wbs);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
}
