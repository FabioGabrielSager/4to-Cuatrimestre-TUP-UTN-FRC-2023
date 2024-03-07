import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {Room} from "../../models/room";
import {Booking} from "../../models/booking";
import {BookingService} from "../../services/booking.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'bp-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() flight: Flight | undefined = undefined;
  @Input() room: Room | undefined = undefined;
  b: Booking = new Booking();
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  sendBoking(form: NgForm){
    if(form.invalid){
      alert("El formulario es invalido, revise los campos");
      return;
    }
    if(this.room != undefined)
      if(this.room.booked){
        alert("Esa habitación ya fue reservada");
        return;
      }

    this.bookingService.addBook(this.b);
  }
}
