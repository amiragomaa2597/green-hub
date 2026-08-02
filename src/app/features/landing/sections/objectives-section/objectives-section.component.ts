import { Component, computed, inject } from '@angular/core';
import { OBJECTIVES_CONTENT } from '../../../../core/content/objectives.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { FocusRailComponent } from './focus-rail/focus-rail.component';

@Component({
  selector: 'app-objectives-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    FocusRailComponent,
  ],
  templateUrl: './objectives-section.component.html',
  styleUrl: './objectives-section.component.scss',
})
export class ObjectivesSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => OBJECTIVES_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].objectives);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].objectives);
}
