import { Component, computed, inject } from '@angular/core';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { TEAM_CONTENT } from '../../../../core/content/team.content';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-thank-you-section',
  standalone: true,
  templateUrl: './thank-you-section.component.html',
  styleUrl: './thank-you-section.component.scss',
})
export class ThankYouSectionComponent {
  private readonly language = inject(LanguageService);

  readonly meta = computed(() => PROJECT_META[this.language.lang()]);
  readonly names = computed(() => TEAM_CONTENT[this.language.lang()].thankYouNames);
}
