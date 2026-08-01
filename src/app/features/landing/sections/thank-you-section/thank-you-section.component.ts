import { Component } from '@angular/core';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { TEAM_CONTENT } from '../../../../core/content/team.content';

@Component({
  selector: 'app-thank-you-section',
  standalone: true,
  templateUrl: './thank-you-section.component.html',
  styleUrl: './thank-you-section.component.scss',
})
export class ThankYouSectionComponent {
  readonly meta = PROJECT_META;
  readonly names = TEAM_CONTENT.thankYouNames;
}
