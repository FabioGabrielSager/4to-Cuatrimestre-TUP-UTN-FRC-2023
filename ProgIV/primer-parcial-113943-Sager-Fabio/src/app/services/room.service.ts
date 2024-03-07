import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { ROOM_LIST } from '../data/room-data';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private list: Room[] = ROOM_LIST;

  constructor() { }

  getRooms(): Room[] {
    return this.list.slice();
  }
}
