import {Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';;

@Directive({
  selector: '[appMyFontStyle]'
})
export class MyFontStyleDirective implements OnInit {

  @Input('appMyFontStyle') style;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    for (let el in this.style ) {
      this.renderer.setStyle(this.elRef.nativeElement, el, this.style[el]);
    }
  }

}
