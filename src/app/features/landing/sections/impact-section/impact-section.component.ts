import { Component } from '@angular/core';
import { IMPACT_CONTENT } from '../../../../core/content/impact.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-impact-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.scss',
})
export class ImpactSectionComponent {
  readonly content = IMPACT_CONTENT;
  readonly hook = SECTION_HOOKS.impact;
  readonly visual = SECTION_VISUALS.impact;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
