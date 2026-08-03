import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { CountUpDirective } from '../../../../../shared/directives/count-up.directive';
import { BudgetMatrixRow, PmbokLevel } from '../../../../../core/models/project.models';
import { usdToEgp } from '../../../../../core/utils/money.util';

@Component({
  selector: 'app-pmbok-ladder',
  standalone: true,
  imports: [RevealOnScrollDirective, CountUpDirective],
  templateUrl: './pmbok-ladder.component.html',
  styleUrl: './pmbok-ladder.component.scss',
})
export class PmbokLadderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) levelsTitle!: string;
  @Input({ required: true }) steps!: PmbokLevel[];
  @Input({ required: true }) matrixTitle!: string;
  @Input({ required: true }) matrix!: BudgetMatrixRow[];
  @Input({ required: true }) stepsNote!: string;
  @Input({ required: true }) componentLabel!: string;
  @Input({ required: true }) amountLabel!: string;
  @Input({ required: true }) reserveLabel!: string;
  @Input({ required: true }) cumulativeLabel!: string;
  @Input({ required: true }) egpLabel!: string;

  activeStep = 4;

  select(step: number): void {
    this.activeStep = step;
  }

  isActive(step: number): boolean {
    return this.activeStep === step;
  }

  toEgp(usd: number): number {
    return usdToEgp(usd);
  }
}
