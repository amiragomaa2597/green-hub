import { Component, Input, OnInit } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { MatrixQuadrant, Stakeholder } from '../../../../../core/models/project.models';

interface QuadTone {
  color: string;
  soft: string;
}

const QUAD_TONES: QuadTone[] = [
  { color: '#22c55e', soft: 'rgba(34, 197, 94, 0.16)' },
  { color: '#3b82f6', soft: 'rgba(59, 130, 246, 0.16)' },
  { color: '#eab308', soft: 'rgba(234, 179, 8, 0.18)' },
  { color: '#a855f7', soft: 'rgba(168, 85, 247, 0.16)' },
];

@Component({
  selector: 'app-stakeholder-board',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './stakeholder-board.component.html',
  styleUrl: './stakeholder-board.component.scss',
})
export class StakeholderBoardComponent implements OnInit {
  @Input({ required: true }) boardLabel!: string;
  @Input({ required: true }) boardTitle!: string;
  @Input({ required: true }) lead!: string;
  @Input({ required: true }) registerTitle!: string;
  @Input({ required: true }) matrixTitle!: string;
  @Input({ required: true }) register!: Stakeholder[];
  @Input({ required: true }) matrix!: MatrixQuadrant[];
  @Input({ required: true }) stakeholderLabel!: string;
  @Input({ required: true }) roleLabel!: string;
  @Input({ required: true }) powerLabel!: string;
  @Input({ required: true }) interestLabel!: string;
  @Input({ required: true }) strategyLabel!: string;
  @Input() mapHint = 'Tap a node on the map — or open a strategy station.';
  @Input() powerAxisHigh = 'High power';
  @Input() powerAxisLow = 'Low power';
  @Input() interestAxisLow = 'Low interest';
  @Input() interestAxisHigh = 'High interest';
  @Input() strategiesLabel = 'strategy stations';

  activeQuad = 0;
  selectedName: string | null = null;
  openStation: number | null = 0;

  ngOnInit(): void {
    this.selectedName = this.register[0]?.name ?? null;
  }

  tone(index: number): QuadTone {
    return QUAD_TONES[index % QUAD_TONES.length];
  }

  selectQuad(index: number): void {
    this.activeQuad = index;
    this.openStation = index;
    this.selectedName = this.matrix[index]?.stakeholders[0] ?? null;
  }

  toggleStation(index: number): void {
    this.openStation = this.openStation === index ? null : index;
    this.activeQuad = index;
    if (this.openStation !== null) {
      this.selectedName = this.matrix[index]?.stakeholders[0] ?? this.selectedName;
    }
  }

  isOpen(index: number): boolean {
    return this.openStation === index;
  }

  selectStakeholder(name: string): void {
    this.selectedName = name;
    const index = this.matrix.findIndex((q) => q.stakeholders.includes(name));
    if (index >= 0) {
      this.activeQuad = index;
      this.openStation = index;
    }
  }

  get selected(): Stakeholder | undefined {
    return this.register.find((row) => row.name === this.selectedName) ?? this.register[0];
  }

  get active(): MatrixQuadrant {
    return this.matrix[this.activeQuad] ?? this.matrix[0];
  }

  quadIndexFor(name: string): number {
    const index = this.matrix.findIndex((q) => q.stakeholders.includes(name));
    return index >= 0 ? index : 0;
  }

  plotLeft(row: Stakeholder): number {
    return 12 + this.score(row.interest) * 76;
  }

  plotBottom(row: Stakeholder): number {
    return 12 + this.score(row.influence) * 76;
  }

  private score(value: string): number {
    const v = value.toLowerCase();
    if (v.includes('high') || v.includes('عالي')) {
      return 0.86;
    }
    if (v.includes('med') || v.includes('متوسط') || v.includes('متوسطة')) {
      return 0.48;
    }
    return 0.16;
  }
}
