import { Component } from '@angular/core';
import { ABOUT_CONTENT } from '../../../../core/content/about.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
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
  readonly content = ABOUT_CONTENT;
  readonly hook = SECTION_HOOKS.about;
  readonly image = PROJECT_META.secondaryImage;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
