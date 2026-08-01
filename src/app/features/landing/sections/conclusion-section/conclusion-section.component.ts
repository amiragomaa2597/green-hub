import { Component } from '@angular/core';
import { CONCLUSION_CONTENT } from '../../../../core/content/conclusion.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';

@Component({
  selector: 'app-conclusion-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
    CountUpDirective,
  ],
  templateUrl: './conclusion-section.component.html',
  styleUrl: './conclusion-section.component.scss',
})
export class ConclusionSectionComponent {
  readonly content = CONCLUSION_CONTENT;
  readonly hook = SECTION_HOOKS.conclusion;
  readonly visual = SECTION_VISUALS.conclusion;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
