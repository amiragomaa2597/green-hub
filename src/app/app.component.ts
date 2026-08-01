import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {
  /** Eagerly construct so document lang/dir apply on boot. */
  private readonly language = inject(LanguageService);
}
