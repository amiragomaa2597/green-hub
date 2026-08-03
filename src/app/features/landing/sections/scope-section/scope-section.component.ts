import { Component, computed, inject } from '@angular/core';
import { SCOPE_CONTENT } from '../../../../core/content/scope.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';

@Component({
  selector: 'app-scope-section',
  standalone: true,
  imports: [RevealOnScrollDirective, SectionMediaComponent],
  templateUrl: './scope-section.component.html',
  styleUrl: './scope-section.component.scss',
})
export class ScopeSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => SCOPE_CONTENT[this.language.lang()]);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].scope);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  readonly tones = [
    '#3b82f6',
    '#22c55e',
    '#eab308',
    '#a855f7',
    '#06b6d4',
    '#84cc16',
    '#f59e0b',
    '#166534',
    '#0ea5e9',
  ];

  readonly lifeTones = ['#3b82f6', '#22c55e', '#a855f7'];

  active = 0;

  get activeRow() {
    return this.content().rows[this.active];
  }

  select(index: number): void {
    this.active = index;
  }

  prev(): void {
    if (this.active > 0) {
      this.active -= 1;
    }
  }

  next(): void {
    if (this.active < this.content().rows.length - 1) {
      this.active += 1;
    }
  }
}
