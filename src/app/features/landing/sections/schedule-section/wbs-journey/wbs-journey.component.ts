import { Component, Input, computed, inject } from '@angular/core';
import { UI_LABELS } from '../../../../../core/content/ui.content';
import { LanguageService } from '../../../../../core/services/language.service';
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
  private readonly language = inject(LanguageService);

  @Input({ required: true }) rootTitle!: string;
  @Input({ required: true }) packages: WbsPackage[] = [];
  @Input() showWeeks = true;

  readonly ui = computed(() => UI_LABELS[this.language.lang()]);

  activeId: number | null = 1;
  openBranch: string | null = null;

  toggle(id: number): void {
    if (this.activeId === id) {
      this.activeId = null;
      this.openBranch = null;
      return;
    }
    this.activeId = id;
    this.openBranch = null;
  }

  isActive(id: number): boolean {
    return this.activeId === id;
  }

  toggleBranch(code: string): void {
    this.openBranch = this.openBranch === code ? null : code;
  }

  isBranchOpen(code: string): boolean {
    return this.openBranch === code;
  }

  taskCode(pkgId: number, index: number): string {
    return `${pkgId}.${index + 1}`;
  }

  hasBranches(pkg: WbsPackage): boolean {
    return !!pkg.branches?.length;
  }

  flatTasks(pkg: WbsPackage): string[] {
    return pkg.tasks ?? [];
  }
}
