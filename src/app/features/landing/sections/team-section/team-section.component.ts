import { Component, computed, inject } from '@angular/core';
import { TEAM_CONTENT } from '../../../../core/content/team.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';
import { ObsChartComponent } from './obs-chart/obs-chart.component';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
    ObsChartComponent,
  ],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
})
export class TeamSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => TEAM_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].team);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].team);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  iconOf(name?: string): IconName {
    return (name ?? 'person') as IconName;
  }
}
