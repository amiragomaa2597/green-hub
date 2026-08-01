import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-section-media',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './section-media.component.html',
  styleUrl: './section-media.component.scss',
})
export class SectionMediaComponent {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input() caption = '';
}
