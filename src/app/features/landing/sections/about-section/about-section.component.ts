import { Component, computed, inject } from '@angular/core';
import { ABOUT_CONTENT } from '../../../../core/content/about.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeaderComponent, RevealOnScrollDirective, IconComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => ABOUT_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].about);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
  readonly image = computed(() => PROJECT_META[this.language.lang()].secondaryImage);

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
