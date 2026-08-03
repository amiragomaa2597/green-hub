import { Component, computed, inject } from '@angular/core';
import { ABOUT_CONTENT } from '../../../../core/content/about.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent, SectionMediaComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => ABOUT_CONTENT[this.language.lang()]);
  readonly meta = computed(() => PROJECT_META[this.language.lang()]);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].about);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
