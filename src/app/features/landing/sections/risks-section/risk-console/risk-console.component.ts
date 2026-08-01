import { Component, Input, OnChanges, computed, inject } from '@angular/core';
import { UI_LABELS } from '../../../../../core/content/ui.content';
import { LanguageService } from '../../../../../core/services/language.service';
import { RiskItem } from '../../../../../core/models/project.models';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { CountUpDirective } from '../../../../../shared/directives/count-up.directive';

type RiskFilter = 'All' | 'High' | 'Medium' | 'Mitigate' | 'Transfer' | 'Share';

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
  readonly filterDefs = computed(() => {
    const labels = this.ui();
    return [
      { key: 'All' as const, label: labels.filterAll },
      { key: 'High' as const, label: labels.filterHigh },
      { key: 'Medium' as const, label: labels.filterMedium },
      { key: 'Mitigate' as const, label: labels.filterMitigate },
      { key: 'Transfer' as const, label: labels.filterTransfer },
      { key: 'Share' as const, label: labels.filterShare },
    ];
  });

  filter: RiskFilter = 'All';
  selectedId = 1;

  ngOnChanges(): void {
    if (!this.risks.length) {
      return;
    }

    if (!this.filtered.some((risk) => risk.id === this.selectedId)) {
      this.selectedId = this.filtered[0]?.id ?? this.risks[0].id;
    }
  }

  get filtered(): RiskItem[] {
    return this.risks.filter((risk) => {
      if (this.filter === 'All') {
        return true;
      }
      if (this.filter === 'High' || this.filter === 'Medium') {
        return risk.probability === this.filter;
      }
      return risk.strategy === this.filter;
    });
  }

  get selected(): RiskItem {
    return (
      this.risks.find((risk) => risk.id === this.selectedId) ?? this.risks[0]
    );
  }

  get maxCost(): number {
    return Math.max(...this.risks.map((risk) => risk.costImpact), 1);
  }

  get maxWeeks(): number {
    return Math.max(...this.risks.map((risk) => this.weeksOf(risk.timeImpact)), 1);
  }

  select(id: number): void {
    this.selectedId = id;
  }

  setFilter(filter: RiskFilter): void {
    this.filter = filter;
    const next = this.filtered[0];
    if (next) {
      this.selectedId = next.id;
    }
  }

  weeksOf(timeImpact: string): number {
    const match = timeImpact.match(/\d+/);
    return match ? Number(match[0]) : 0;
  }

  costPercent(cost: number): number {
    return Math.max(8, Math.round((cost / this.maxCost) * 100));
  }

  timePercent(weeks: number): number {
    if (weeks <= 0) {
      return 4;
    }
    return Math.max(10, Math.round((weeks / this.maxWeeks) * 100));
  }

  severityScore(risk: RiskItem): number {
    const probabilityWeight = risk.probability === 'High' ? 1 : 0.65;
    return Math.round(
      (risk.costImpact / this.maxCost) * 70 * probabilityWeight +
        (this.weeksOf(risk.timeImpact) / this.maxWeeks) * 30
    );
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
