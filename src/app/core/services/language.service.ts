import { Injectable, computed, signal } from '@angular/core';
import {
  LANG_STORAGE_KEY,
  Lang,
  isLang,
} from '../i18n/language.types';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly langSignal = signal<Lang>(this.readInitialLang());

  readonly lang = this.langSignal.asReadonly();
  readonly dir = computed(() => (this.langSignal() === 'ar' ? 'rtl' : 'ltr'));
  readonly isArabic = computed(() => this.langSignal() === 'ar');
  readonly nextLabel = computed(() => (this.langSignal() === 'ar' ? 'EN' : 'ع'));

  constructor() {
    this.applyToDocument(this.langSignal());
  }

  setLang(lang: Lang): void {
    if (this.langSignal() === lang) {
      return;
    }

    this.langSignal.set(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    this.applyToDocument(lang);
  }

  toggle(): void {
    this.setLang(this.langSignal() === 'ar' ? 'en' : 'ar');
  }

  private readInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (isLang(stored)) {
        return stored;
      }
    } catch {
      // Ignore storage access errors (private mode, SSR, etc.).
    }

    return 'en';
  }

  private applyToDocument(lang: Lang): void {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'جرين هب | مشروع تخرج MBA — المجموعة 5'
        : 'The Green Hub | MBA Team Final Project — Group 5';
  }
}
