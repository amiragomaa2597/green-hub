import { Component } from '@angular/core';
import { OBJECTIVES_CONTENT } from '../../../../core/content/objectives.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-objectives-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './objectives-section.component.html',
  styleUrl: './objectives-section.component.scss',
})
export class ObjectivesSectionComponent {
  readonly content = OBJECTIVES_CONTENT;
  readonly hook = SECTION_HOOKS.objectives;
  readonly visual = SECTION_VISUALS.objectives;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
