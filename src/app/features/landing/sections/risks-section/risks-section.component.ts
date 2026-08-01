import { Component, computed, inject } from '@angular/core';
import { RISKS_CONTENT } from '../../../../core/content/risks.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { LanguageService } from '../../../../core/services/language.service';
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
  private readonly language = inject(LanguageService);

  readonly content = computed(() => RISKS_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].risks);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].risks);
}
