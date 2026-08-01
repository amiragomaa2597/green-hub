import { Component, HostListener, OnDestroy, computed, inject } from '@angular/core';
import { NAV_ITEMS, PROJECT_META } from '../../../core/content/hero.content';
import { UI_LABELS } from '../../../core/content/ui.content';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnDestroy {
  private readonly languageService = inject(LanguageService);

  readonly lang = this.languageService.lang;
  readonly nextLabel = this.languageService.nextLabel;
  readonly meta = computed(() => PROJECT_META[this.lang()]);
  readonly items = computed(() => NAV_ITEMS[this.lang()]);
  readonly ui = computed(() => UI_LABELS[this.lang()]);
  readonly langToggleAria = computed(() =>
    this.lang() === 'ar' ? this.ui().switchToEnglish : this.ui().switchToArabic
  );

  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 16;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }

  toggleLang(): void {
    this.languageService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.syncBodyScroll();
  }

  closeMenu(): void {
    if (!this.menuOpen) {
      return;
    }
    this.menuOpen = false;
    this.syncBodyScroll();
  }

  padIndex(value: number): string {
    return value.toString().padStart(2, '0');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('nav-drawer-open');
  }

  private syncBodyScroll(): void {
    document.body.classList.toggle('nav-drawer-open', this.menuOpen);
  }
}
