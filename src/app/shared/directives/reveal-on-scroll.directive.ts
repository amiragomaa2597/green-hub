import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';
import { whenInView } from '../utils/when-in-view';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    this.observer = whenInView(node, () => node.classList.add('is-visible'));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
