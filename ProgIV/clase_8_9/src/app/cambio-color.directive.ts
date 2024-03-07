import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCambioColor]'
})
export class CambioColorDirective implements OnInit {
  color: string = "red";

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.elemento.nativeElement().style.backgroundColor(this.color);
  }

}
