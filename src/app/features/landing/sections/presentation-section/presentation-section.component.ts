import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PRESENTATION_CONTENT } from '../../../../core/content/presentation.content';
import { PROJECT_META } from '../../../../core/content/hero.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { SECTION_VISUALS } from '../../../../core/content/visual.content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SectionMediaComponent } from '../../../../shared/components/section-media/section-media.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SectionMediaComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './presentation-section.component.html',
  styleUrl: './presentation-section.component.scss',
})
export class PresentationSectionComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly content = PRESENTATION_CONTENT;
  readonly hook = SECTION_HOOKS.presentation;
  readonly visual = SECTION_VISUALS.presentation;
  readonly logo = PROJECT_META.logo;
  readonly pdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    PRESENTATION_CONTENT.filePath
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
    window.open(this.content.filePath, '_blank', 'noopener');
  }
}
