import { Component, computed, inject } from '@angular/core';
import { PROJECT_META } from '../../../core/content/hero.content';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly language = inject(LanguageService);

  readonly meta = computed(() => PROJECT_META[this.language.lang()]);
}
