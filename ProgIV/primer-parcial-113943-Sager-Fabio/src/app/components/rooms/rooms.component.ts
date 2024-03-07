import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../models/room";

@Component({
  selector: 'bp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() destinationId: string = "";
  @Output() onRoomSelection = new EventEmitter<Room>();
  rooms: Room[] = []
  constructor(private roomsService: RoomService) { }

  ngOnInit(): void {
    let destination = this.destinationId;
    let rooms: Room[] = [];
    this.roomsService.getRooms().forEach(function (r){
      if(r.destinationId == destination){
        rooms.push(r);
      }
    });
    this.rooms = rooms;
  }

  selectRoom($event: any): void{
    let room = this.rooms[$event.target.value];
    if(room.booked){
      alert("Esa habitación ya fue reservada");
    }
    else
      this.onRoomSelection.emit(this.rooms[$event.target.value]);
  }

}
