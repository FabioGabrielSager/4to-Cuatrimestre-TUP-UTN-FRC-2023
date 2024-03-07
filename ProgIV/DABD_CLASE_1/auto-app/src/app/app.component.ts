import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Para escribir directamente el template aquí en TS:
  // template: 'Hola mundo desde TS',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-app';
}
