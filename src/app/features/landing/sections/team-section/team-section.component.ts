import { Component } from '@angular/core';
import { TEAM_CONTENT } from '../../../../core/content/team.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
})
export class TeamSectionComponent {
  readonly content = TEAM_CONTENT;
  readonly hook = SECTION_HOOKS.team;
  readonly visual = SECTION_VISUALS.team;

  iconOf(name?: string): IconName {
    return (name ?? 'person') as IconName;
  }
}
