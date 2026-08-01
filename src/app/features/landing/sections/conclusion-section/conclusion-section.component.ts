import { Component, computed, inject } from '@angular/core';
import { CONCLUSION_CONTENT } from '../../../../core/content/conclusion.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';

@Component({
  selector: 'app-conclusion-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
    CountUpDirective,
  ],
  templateUrl: './conclusion-section.component.html',
  styleUrl: './conclusion-section.component.scss',
})
export class ConclusionSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => CONCLUSION_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].conclusion);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].conclusion);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
