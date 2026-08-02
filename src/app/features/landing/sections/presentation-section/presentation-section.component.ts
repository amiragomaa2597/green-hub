import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PRESENTATION_CONTENT } from '../../../../core/content/presentation.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { UI_LABELS } from '../../../../core/content/ui.content';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './presentation-section.component.html',
  styleUrl: './presentation-section.component.scss',
})
export class PresentationSectionComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly language = inject(LanguageService);

  readonly content = computed(() => PRESENTATION_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].presentation);
  readonly visual = computed(() => SECTION_VISUALS[this.language.lang()].presentation);
  readonly ui = computed(() => UI_LABELS[this.language.lang()]);
  readonly logo = computed(() => PROJECT_META[this.language.lang()].logo);
  readonly pdfUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.content().filePath)
  );

  viewerOpen = false;

  openViewer(): void {
    this.viewerOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeViewer(): void {
    this.viewerOpen = false;
    document.body.style.overflow = '';
  }

  openInNewTab(): void {
    window.open(this.content().filePath, '_blank', 'noopener');
  }
}
