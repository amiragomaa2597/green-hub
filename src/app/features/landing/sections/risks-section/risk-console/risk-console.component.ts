import { Component, Input, OnChanges, computed, inject } from '@angular/core';
import { UI_LABELS } from '../../../../../core/content/ui.content';
import { LanguageService } from '../../../../../core/services/language.service';
import { RiskItem } from '../../../../../core/models/project.models';
import { egpToUsd } from '../../../../../core/utils/money.util';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { CountUpDirective } from '../../../../../shared/directives/count-up.directive';

interface RiskTone {
  color: string;
  soft: string;
}

/** Same palette as WBS / Power-Interest journey. */
const RISK_TONES: RiskTone[] = [
  { color: '#3b82f6', soft: 'rgba(59, 130, 246, 0.16)' },
  { color: '#22c55e', soft: 'rgba(34, 197, 94, 0.16)' },
  { color: '#eab308', soft: 'rgba(234, 179, 8, 0.18)' },
  { color: '#a855f7', soft: 'rgba(168, 85, 247, 0.16)' },
  { color: '#06b6d4', soft: 'rgba(6, 182, 212, 0.16)' },
  { color: '#84cc16', soft: 'rgba(132, 204, 22, 0.16)' },
  { color: '#f59e0b', soft: 'rgba(245, 158, 11, 0.16)' },
  { color: '#166534', soft: 'rgba(22, 101, 52, 0.16)' },
];

@Component({
  selector: 'app-risk-console',
  standalone: true,
  imports: [RevealOnScrollDirective, CountUpDirective],
  templateUrl: './risk-console.component.html',
  styleUrl: './risk-console.component.scss',
})
export class RiskConsoleComponent implements OnChanges {
  private readonly language = inject(LanguageService);

  @Input({ required: true }) risks: RiskItem[] = [];
  @Input({ required: true }) summary!: {
    totalCostImpact: number;
    totalDelay: number;
    totalMitigationCost: number;
    goal: string;
  };

  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  selectedId = 1;
  openStation: number | null = 1;

  ngOnChanges(): void {
    if (!this.risks.length) {
      return;
    }
    if (!this.risks.some((risk) => risk.id === this.selectedId)) {
      this.selectedId = this.risks[0].id;
      this.openStation = this.selectedId;
    }
  }

  get selected(): RiskItem {
    return this.risks.find((risk) => risk.id === this.selectedId) ?? this.risks[0];
  }

  get maxCost(): number {
    return Math.max(...this.risks.map((risk) => risk.costImpact), 1);
  }

  tone(index: number): RiskTone {
    return RISK_TONES[index % RISK_TONES.length];
  }

  toneFor(risk: RiskItem): RiskTone {
    return this.tone(Math.max(0, risk.id - 1));
  }

  select(id: number): void {
    this.selectedId = id;
    this.openStation = id;
  }

  toggleStation(id: number): void {
    this.openStation = this.openStation === id ? null : id;
    this.selectedId = id;
  }

  isOpen(id: number): boolean {
    return this.openStation === id;
  }

  weeksOf(timeImpact: string): number {
    const match = timeImpact.match(/\d+/);
    return match ? Number(match[0]) : 0;
  }

  toUsd(egp: number): number {
    return egpToUsd(egp);
  }

  /** X axis: cost impact (low → high). */
  plotLeft(risk: RiskItem): number {
    return 12 + (risk.costImpact / this.maxCost) * 76;
  }

  /** Y axis: probability (Medium bottom, High top). */
  plotBottom(risk: RiskItem): number {
    return risk.probability === 'High' ? 72 : 28;
  }

  probabilityLabel(value: string): string {
    const labels = this.ui();
    if (value === 'High') {
      return labels.high;
    }
    if (value === 'Medium') {
      return labels.medium;
    }
    return value;
  }

  strategyLabel(value: string): string {
    const labels = this.ui();
    if (value === 'Mitigate') {
      return labels.mitigate;
    }
    if (value === 'Transfer') {
      return labels.transfer;
    }
    if (value === 'Share') {
      return labels.share;
    }
    return value;
  }
}
