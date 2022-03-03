import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirect1]'
})
export class Direct1Directive {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'direct1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'direct1');
  }
}
