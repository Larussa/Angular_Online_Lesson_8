import { Directive, HostListener, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appNgStyle]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(style.color)': 'getFontColor()'
  }
})
export class NgStyleDirective implements OnInit {
  @Input('appNgStyle') customFontColor;
  @Input() defaultFontColor;

  private fontColor: string;
  @HostBinding('style.color') get getFontColor() {
    return this.fontColor;
  }

  ngOnInit() {
    this.fontColor = this.defaultFontColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontColor = this.customFontColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontColor = this.defaultFontColor;
  }

  constructor() {
  }

}
