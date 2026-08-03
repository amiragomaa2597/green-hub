import { Component, computed, inject } from '@angular/core';
import { TEAM_CONTENT } from '../../../../core/content/team.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent, SectionMediaComponent],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
})
export class TeamSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => TEAM_CONTENT[this.language.lang()]);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].team);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  readonly tones = ['#3b82f6', '#22c55e', '#eab308', '#a855f7', '#06b6d4', '#166534'];

  iconOf(name?: string): IconName {
    return (name ?? 'person') as IconName;
  }
}
