import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective implements OnInit{
  @Input() title: string = "";
  @Input() color: string = "red";
  @Input() fontSize: string = "12px";
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setProperty(this.el.nativeElement, 'textContent', this.title);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.el.nativeElement.style.fontSize = this.fontSize;
  }
}
