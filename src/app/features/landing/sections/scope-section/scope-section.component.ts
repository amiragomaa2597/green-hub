import { Component } from '@angular/core';
import { SCOPE_CONTENT } from '../../../../core/content/scope.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-scope-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './scope-section.component.html',
  styleUrl: './scope-section.component.scss',
})
export class ScopeSectionComponent {
  readonly content = SCOPE_CONTENT;
  readonly hook = SECTION_HOOKS.scope;
  readonly visual = SECTION_VISUALS.scope;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
