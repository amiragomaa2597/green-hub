import { Component, computed, inject } from '@angular/core';
import { STAKEHOLDERS_CONTENT } from '../../../../core/content/stakeholders.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { StakeholderBoardComponent } from './stakeholder-board/stakeholder-board.component';

@Component({
  selector: 'app-stakeholders-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    StakeholderBoardComponent,
  ],
  templateUrl: './stakeholders-section.component.html',
  styleUrl: './stakeholders-section.component.scss',
})
export class StakeholdersSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => STAKEHOLDERS_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].stakeholders);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].stakeholders);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
}
