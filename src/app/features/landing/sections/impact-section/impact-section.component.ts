import { Component, computed, inject } from '@angular/core';
import { IMPACT_CONTENT } from '../../../../core/content/impact.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { ImpactOrbitComponent } from './impact-orbit/impact-orbit.component';

@Component({
  selector: 'app-impact-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    ImpactOrbitComponent,
  ],
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.scss',
})
export class ImpactSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => IMPACT_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].impact);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].impact);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
}
