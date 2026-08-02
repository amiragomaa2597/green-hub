import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OPINIONS_CONTENT } from '../../../../core/content/opinions.content';
import { SECTION_HOOKS } from '../../../../core/content/hooks.content';
import { OpinionService } from '../../../../core/services/opinion.service';
import { LanguageService } from '../../../../core/services/language.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-opinions-section',
  standalone: true,
  imports: [
    FormsModule,
    SectionHeaderComponent,
    RevealOnScrollDirective,
    IconComponent,
  ],
  templateUrl: './opinions-section.component.html',
  styleUrl: './opinions-section.component.scss',
})
export class OpinionsSectionComponent {
  private readonly language = inject(LanguageService);
  private readonly opinionsApi = inject(OpinionService);

  readonly content = computed(() => OPINIONS_CONTENT[this.language.lang()]);
  readonly hook = computed(() => SECTION_HOOKS[this.language.lang()].opinions);

  readonly interestId = signal('invest-yes');
  readonly message = signal('');
  readonly status = signal<SendStatus>('idle');

  readonly canSubmit = computed(() => {
    const text = this.message().trim();
    return text.length >= 8 && this.status() !== 'sending';
  });

  selectInterest(id: string): void {
    this.interestId.set(id);
  }

  onMessageInput(value: string): void {
    this.message.set(value);
    if (this.status() === 'error' || this.status() === 'sent') {
      this.status.set('idle');
    }
  }

  submit(): void {
    if (!this.canSubmit()) {
      return;
    }

    const content = this.content();
    const selected =
      content.options.find((option) => option.id === this.interestId()) ??
      content.options[0];

    this.status.set('sending');

    this.opinionsApi
      .send({
        interestId: selected.id,
        interestLabel: selected.label,
        message: this.message().trim(),
      })
      .subscribe(({ ok }) => {
        if (ok) {
          this.status.set('sent');
          this.message.set('');
          return;
        }
        this.status.set('error');
      });
  }
}
