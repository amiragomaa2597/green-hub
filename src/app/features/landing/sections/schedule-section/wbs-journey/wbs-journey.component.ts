import { Component, Input, computed, inject } from '@angular/core';
import { UI_LABELS } from '../../../../../core/content/ui.content';
import { LanguageService } from '../../../../../core/services/language.service';
import { WbsPackage } from '../../../../../core/models/project.models';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-wbs-journey',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './wbs-journey.component.html',
  styleUrl: './wbs-journey.component.scss',
})
export class WbsJourneyComponent {
  private readonly language = inject(LanguageService);

  @Input({ required: true }) rootTitle!: string;
  @Input({ required: true }) packages: WbsPackage[] = [];

  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  activeId: number | null = 1;

  toggle(id: number): void {
    this.activeId = this.activeId === id ? null : id;
  }

  isActive(id: number): boolean {
    return this.activeId === id;
  }

  taskCode(pkgId: number, index: number): string {
    return `${pkgId}.${index + 1}`;
  }
}
