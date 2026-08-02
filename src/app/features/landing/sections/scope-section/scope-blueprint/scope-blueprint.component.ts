import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';
import { ScopePhase } from '../../../../../core/models/project.models';

@Component({
  selector: 'app-scope-blueprint',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './scope-blueprint.component.html',
  styleUrl: './scope-blueprint.component.scss',
})
export class ScopeBlueprintComponent {
  @Input({ required: true }) blueprintLabel!: string;
  @Input({ required: true }) blueprintTitle!: string;
  @Input({ required: true }) phasesCaption!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) requirementsLabel!: string;
  @Input({ required: true }) requirements!: string[];
  @Input({ required: true }) includesLabel!: string;
  @Input({ required: true }) excludesLabel!: string;
  @Input({ required: true }) includes!: string[];
  @Input({ required: true }) excludes!: string[];
  @Input({ required: true }) assumptionsLabel!: string;
  @Input({ required: true }) constraintsLabel!: string;
  @Input({ required: true }) assumptions!: string[];
  @Input({ required: true }) constraints!: string[];
  @Input({ required: true }) strategyLabel!: string;
  @Input({ required: true }) phases!: ScopePhase[];
  @Input({ required: true }) acceptanceLabel!: string;
  @Input({ required: true }) acceptance!: string[];
  @Input({ required: true }) costLabel!: string;
  @Input({ required: true }) costNote!: string;
  @Input({ required: true }) costItems!: Array<{ label: string; amount: string; color: string }>;
  @Input({ required: true }) totalBudgetLabel!: string;

  mode: 'in' | 'out' = 'in';
  activePhase = 0;

  setMode(mode: 'in' | 'out'): void {
    this.mode = mode;
  }

  selectPhase(index: number): void {
    this.activePhase = index;
  }
}
