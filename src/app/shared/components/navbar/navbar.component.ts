import { Component, HostListener } from '@angular/core';
import { NAV_ITEMS, PROJECT_META } from '../../../core/content/hero.content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly brand = PROJECT_META.brand;
  readonly logo = PROJECT_META.logo;
  readonly items = NAV_ITEMS;
  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 16;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
