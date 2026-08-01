import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ObjectivesSectionComponent } from './sections/objectives-section/objectives-section.component';
import { TeamSectionComponent } from './sections/team-section/team-section.component';
import { ScopeSectionComponent } from './sections/scope-section/scope-section.component';
import { DesignSectionComponent } from './sections/design-section/design-section.component';
import { ScheduleSectionComponent } from './sections/schedule-section/schedule-section.component';
import { BudgetSectionComponent } from './sections/budget-section/budget-section.component';
import { StakeholdersSectionComponent } from './sections/stakeholders-section/stakeholders-section.component';
import { RisksSectionComponent } from './sections/risks-section/risks-section.component';
import { ImpactSectionComponent } from './sections/impact-section/impact-section.component';
import { ConclusionSectionComponent } from './sections/conclusion-section/conclusion-section.component';
import { PresentationSectionComponent } from './sections/presentation-section/presentation-section.component';
import { ThankYouSectionComponent } from './sections/thank-you-section/thank-you-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ObjectivesSectionComponent,
    TeamSectionComponent,
    ScopeSectionComponent,
    DesignSectionComponent,
    ScheduleSectionComponent,
    BudgetSectionComponent,
    StakeholdersSectionComponent,
    RisksSectionComponent,
    ImpactSectionComponent,
    ConclusionSectionComponent,
    PresentationSectionComponent,
    ThankYouSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
