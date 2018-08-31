import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  host: {
    '(click)': 'onClick()'
  }
})
export class MyClassDirective {

  constructor(
    private elRef: ElementRef,
  ) { }

  onClick() {
    this.elRef.nativeElement.style.fontSize = "20px";
    this.elRef.nativeElement.style.color = "red";
  }
}
