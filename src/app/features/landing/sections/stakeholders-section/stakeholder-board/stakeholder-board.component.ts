import { Component, Input, OnInit } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { MatrixQuadrant, Stakeholder } from '../../../../../core/models/project.models';

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

  activeQuad = 0;
  selectedName: string | null = null;

  ngOnInit(): void {
    this.selectedName = this.register[0]?.name ?? null;
  }

  selectQuad(index: number): void {
    this.activeQuad = index;
    this.selectedName = this.matrix[index]?.stakeholders[0] ?? null;
  }

  selectStakeholder(name: string): void {
    this.selectedName = name;
    const index = this.matrix.findIndex((q) => q.stakeholders.includes(name));
    if (index >= 0) {
      this.activeQuad = index;
    }
  }

  get selected(): Stakeholder | undefined {
    return this.register.find((row) => row.name === this.selectedName) ?? this.register[0];
  }

  get active(): MatrixQuadrant {
    return this.matrix[this.activeQuad] ?? this.matrix[0];
  }
}
