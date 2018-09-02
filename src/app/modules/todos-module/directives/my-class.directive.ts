import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  host: {
    '(click)': 'onClick()'
  }
})
export class MyClassDirective {
  @Input('appMyClass') myClass;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  onClick() {
    this.renderer.addClass(this.elRef.nativeElement, this.myClass);
  }
}
