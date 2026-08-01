import { Component } from '@angular/core';
import { STAKEHOLDERS_CONTENT } from '../../../../core/content/stakeholders.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-stakeholders-section',
  standalone: true,
  imports: [SectionHeaderComponent, SectionMediaComponent, RevealOnScrollDirective],
  templateUrl: './stakeholders-section.component.html',
  styleUrl: './stakeholders-section.component.scss',
})
export class StakeholdersSectionComponent {
  readonly content = STAKEHOLDERS_CONTENT;
  readonly hook = SECTION_HOOKS.stakeholders;
  readonly visual = SECTION_VISUALS.stakeholders;
}
