import {Component, OnDestroy, OnInit} from '@angular/core';
import {Invoice} from "../../../models/Invoice";
import {InvoicesService} from "../../../services/invoices.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'ef-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit,OnDestroy{
  invoices: Invoice[] = [];
  private subs: Subscription = new Subscription();
  selectedItem: number = 0;

  constructor(private invoicesService: InvoicesService) {
  }

  ngOnInit(): void {
    this.subs.add(
        this.invoicesService.getAll().subscribe(
            {
              next: value => { this.invoices = value },
              error: err => { alert("Hubo un error: " + err.message) }
            }
        )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onItemSelection($event: number){
      this.selectedItem = $event;
  }
}
