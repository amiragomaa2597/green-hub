import { Component, computed, inject } from '@angular/core';
import { DESIGN_CONTENT } from '../../../../core/content/design.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
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
  private readonly language = inject(LanguageService);

  readonly content = computed(() => DESIGN_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].design);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
  readonly image = computed(() => PROJECT_META[this.language.lang()].heroImage);

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
