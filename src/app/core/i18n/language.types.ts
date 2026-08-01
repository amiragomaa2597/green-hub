export type Lang = 'en' | 'ar';

export type Localized<T> = Record<Lang, T>;

export const LANG_STORAGE_KEY = 'green-hub-lang';

export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'ar';
}
