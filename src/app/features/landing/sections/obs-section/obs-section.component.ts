import { Component, computed, inject } from '@angular/core';
import {
  OBS_CONTENT,
  ObsResourceRow,
  ObsRole,
} from '../../../../core/content/obs.content';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-obs-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './obs-section.component.html',
  styleUrl: './obs-section.component.scss',
})
export class ObsSectionComponent {
  private readonly language = inject(LanguageService);

  readonly content = computed(() => OBS_CONTENT[this.language.lang()]);

  readonly tones = [
    '#0e7490',
    '#2563eb',
    '#0ea5e9',
    '#14b8a6',
    '#22c55e',
    '#84cc16',
    '#15803d',
    '#eab308',
    '#f59e0b',
    '#06b6d4',
    '#0891b2',
    '#10b981',
    '#166534',
    '#64748b',
    '#475569',
  ];

  readonly resourceTones = [
    '#0e7490',
    '#2563eb',
    '#14b8a6',
    '#ca8a04',
    '#16a34a',
    '#0891b2',
    '#b45309',
    '#0d9488',
    '#dc2626',
  ];

  active = 1;
  activeResource = 0;

  get activeRole(): ObsRole {
    return this.content().roles[this.active];
  }

  get activeResourceRow(): ObsResourceRow {
    return this.content().resources[this.activeResource];
  }

  select(index: number): void {
    this.active = index;
  }

  selectResource(index: number): void {
    this.activeResource = index;
  }

  toneOf(index: number): string {
    return this.tones[index % this.tones.length];
  }

  resourceTone(index: number): string {
    return this.resourceTones[index % this.resourceTones.length];
  }

  isNamedPerson(assignee: string): boolean {
    return !/(appointment|contractor|consultants)/i.test(assignee);
  }

  reportChain(role: ObsRole): string[] {
    return [role.title, role.reportsTo];
  }

  /** Extract leading number for balance visualization; fall back to 0. */
  measure(value: string): number {
    const match = value.match(/[\d.]+/);
    return match ? Number(match[0]) : 0;
  }

  insideShare(row: ObsResourceRow): number {
    const inside = this.measure(row.inside);
    const outside = this.measure(row.outside);
    const total = inside + outside;
    if (total <= 0) {
      return 50;
    }
    return Math.round((inside / total) * 100);
  }

  outsideShare(row: ObsResourceRow): number {
    return 100 - this.insideShare(row);
  }
}
