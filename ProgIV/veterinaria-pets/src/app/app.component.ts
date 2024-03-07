import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veterinaria-pets';
  displayAll: boolean = false;
  selectedComponent: string = "";

  selectComponent(componentName: string){
    if(componentName != this.selectedComponent)
      this.selectedComponent = componentName;
    else
      this.selectedComponent = "";
  }
}
