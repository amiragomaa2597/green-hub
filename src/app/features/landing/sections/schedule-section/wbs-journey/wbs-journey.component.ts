import { Component, Input } from '@angular/core';
import { WbsPackage } from '../../../../../core/models/project.models';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-wbs-journey',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './wbs-journey.component.html',
  styleUrl: './wbs-journey.component.scss',
})
export class WbsJourneyComponent {
  @Input({ required: true }) rootTitle!: string;
  @Input({ required: true }) packages: WbsPackage[] = [];

  activeId: number | null = 1;

  toggle(id: number): void {
    this.activeId = this.activeId === id ? null : id;
  }

  isActive(id: number): boolean {
    return this.activeId === id;
  }

  taskCode(pkgId: number, index: number): string {
    return `${pkgId}.${index + 1}`;
  }
}
