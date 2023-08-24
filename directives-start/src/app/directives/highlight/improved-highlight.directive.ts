import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appImprovedHighlight]'
})
export class ImprovedHighlightDirective implements OnInit {
  @Input() defaultColor= 'blue'
  @Input('appImprovedHighlight') HighlightColor= 'pink'

  element = this.elementRef.nativeElement

  @HostBinding('style.backgroundColor') backgroundColor= this.HighlightColor

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element, 'background-color', this.defaultColor)
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.element, 'background-color', this.HighlightColor)
    this.backgroundColor = this.HighlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor
  }
}
