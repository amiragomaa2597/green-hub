import { Component, computed, inject } from '@angular/core';
import { CORE_PILLARS, PROJECT_META } from '../../../../core/content/hero.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  private readonly language = inject(LanguageService);

  readonly meta = computed(() => PROJECT_META[this.language.lang()]);
  readonly pillars = computed(() => CORE_PILLARS[this.language.lang()]);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
