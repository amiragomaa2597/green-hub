import { Component } from '@angular/core';
import { DESIGN_CONTENT } from '../../../../core/content/design.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-design-section',
  standalone: true,
  imports: [SectionHeaderComponent, RevealOnScrollDirective, IconComponent],
  templateUrl: './design-section.component.html',
  styleUrl: './design-section.component.scss',
})
export class DesignSectionComponent {
  readonly content = DESIGN_CONTENT;
  readonly hook = SECTION_HOOKS.design;
  readonly image = PROJECT_META.heroImage;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
