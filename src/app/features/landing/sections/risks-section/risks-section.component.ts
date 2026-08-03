import { Component, computed, inject } from '@angular/core';
import { RISKS_CONTENT } from '../../../../core/content/risks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RiskConsoleComponent } from './risk-console/risk-console.component';

@Component({
  selector: 'app-risks-section',
  standalone: true,
  imports: [
    RevealOnScrollDirective,
    SectionMediaComponent,
    RiskConsoleComponent,
  ],
  templateUrl: './risks-section.component.html',
  styleUrl: './risks-section.component.scss',
})
export class RisksSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => RISKS_CONTENT[this.language.lang()]);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].risks);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
}
