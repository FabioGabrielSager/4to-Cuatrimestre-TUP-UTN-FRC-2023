import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-rango',
  templateUrl: './padre-rango.component.html',
  styleUrls: ['./padre-rango.component.css']
})
export class PadreRangoComponent {

  opacity: number = 1;
  parentBackground = 'rgba(255, 1, 1,0.8)';

  updateOpacity(opacity: number) {
    this.parentBackground = `rgba(255, 1, 1, ${opacity})`;;
  }
}
