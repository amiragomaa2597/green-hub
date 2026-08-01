import { Component, HostListener, OnDestroy } from '@angular/core';
import { NAV_ITEMS, PROJECT_META } from '../../../core/content/hero.content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnDestroy {
  readonly brand = PROJECT_META.brand;
  readonly logo = PROJECT_META.logo;
  readonly tagline = PROJECT_META.tagline;
  readonly subtitle = PROJECT_META.subtitle;
  readonly items = NAV_ITEMS;
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
