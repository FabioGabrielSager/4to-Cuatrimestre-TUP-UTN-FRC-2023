import { Component } from '@angular/core';
import {Flight} from "./models/flight";
import {Room} from "./models/room";

@Component({
  selector: 'bp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-process';
  selectedMenu: string = "flights";
  selectedFlight: Flight | undefined = undefined;
  selectedRoom: Room | undefined = undefined;
  destinationId: string = "";

  selectMenu(menuName: string): void{
    if(this.selectedMenu == menuName){
      this.selectedMenu = "";
      return;
    }

    this.selectedMenu = menuName;
  }

  setFlight($event: Flight) {
    this.selectedFlight = $event;
    this.destinationId = $event.destinationId;
  }
}
