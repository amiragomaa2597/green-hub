import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../../shared/components/icon/icon.component';
import { Deliverable, ScopePhase } from '../../../../../core/models/project.models';

type ScopeMode =
  | 'boundary'
  | 'systems'
  | 'strategy'
  | 'gates'
  | 'budget'
  | 'outputs';

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
  @Input({ required: true }) statement!: string;
  @Input({ required: true }) missionBrief!: string;
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
  @Input({ required: true }) deliverablesLabel!: string;
  @Input({ required: true }) deliverables!: Deliverable[];
  @Input({ required: true }) modesLabel!: string;
  @Input({ required: true }) modeBoundary!: string;
  @Input({ required: true }) modeSystems!: string;
  @Input({ required: true }) modeStrategy!: string;
  @Input({ required: true }) modeGates!: string;
  @Input({ required: true }) modeBudget!: string;
  @Input({ required: true }) modeOutputs!: string;
  @Input({ required: true }) insideFence!: string;
  @Input({ required: true }) outsideFence!: string;
  @Input({ required: true }) flipBoundary!: string;
  @Input({ required: true }) lockStatus!: string;
  @Input({ required: true }) unlockedLabel!: string;

  mode: ScopeMode = 'boundary';
  fenceSide: 'in' | 'out' = 'in';
  activePhase = 0;
  activeSystem = 0;
  activeGate = 0;
  activeOutput = 0;
  clearedGates = new Set<number>([0]);

  get modes(): Array<{ id: ScopeMode; label: string }> {
    return [
      { id: 'boundary', label: this.modeBoundary },
      { id: 'systems', label: this.modeSystems },
      { id: 'strategy', label: this.modeStrategy },
      { id: 'gates', label: this.modeGates },
      { id: 'budget', label: this.modeBudget },
      { id: 'outputs', label: this.modeOutputs },
    ];
  }

  setMode(mode: ScopeMode): void {
    this.mode = mode;
  }

  flipFence(): void {
    this.fenceSide = this.fenceSide === 'in' ? 'out' : 'in';
  }

  setFence(side: 'in' | 'out'): void {
    this.fenceSide = side;
  }

  selectPhase(index: number): void {
    this.activePhase = index;
  }

  selectSystem(index: number): void {
    this.activeSystem = index;
  }

  selectGate(index: number): void {
    this.activeGate = index;
    this.clearedGates.add(index);
  }

  isGateCleared(index: number): boolean {
    return this.clearedGates.has(index);
  }

  selectOutput(index: number): void {
    this.activeOutput = index;
  }

  phaseProgress(): number {
    if (!this.phases.length) {
      return 0;
    }
    return ((this.activePhase + 1) / this.phases.length) * 100;
  }

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }

  systemIcon(index: number): IconName {
    const icons: IconName[] = ['solar', 'cpu', 'water', 'recycle', 'building'];
    return icons[index % icons.length];
  }
}
