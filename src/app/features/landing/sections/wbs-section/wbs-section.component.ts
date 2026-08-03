import { Component, computed, inject } from '@angular/core';
import { WBS_CONTENT } from '../../../../core/content/wbs.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { WbsJourneyComponent } from '../schedule-section/wbs-journey/wbs-journey.component';

@Component({
  selector: 'app-wbs-section',
  standalone: true,
  imports: [RevealOnScrollDirective, WbsJourneyComponent],
  templateUrl: './wbs-section.component.html',
  styleUrl: './wbs-section.component.scss',
})
export class WbsSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => WBS_CONTENT[this.language.lang()]);
}
