import { Component } from '@angular/core';
import { PROJECT_META } from '../../../core/content/hero.content';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly meta = PROJECT_META;
}
