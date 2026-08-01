import { Component } from '@angular/core';
import { RISKS_CONTENT } from '../../../../core/content/risks.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RiskConsoleComponent } from './risk-console/risk-console.component';

@Component({
  selector: 'app-risks-section',
  standalone: true,
  imports: [SectionHeaderComponent, SectionMediaComponent, RiskConsoleComponent],
  templateUrl: './risks-section.component.html',
  styleUrl: './risks-section.component.scss',
})
export class RisksSectionComponent {
  readonly content = RISKS_CONTENT;
  readonly hook = SECTION_HOOKS.risks;
  readonly visual = SECTION_VISUALS.risks;
}
