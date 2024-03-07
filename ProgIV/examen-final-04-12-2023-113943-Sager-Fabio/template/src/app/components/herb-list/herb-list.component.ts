import {Component, OnDestroy, OnInit} from '@angular/core';
import { Herb } from 'src/app/models/Herb';
import {Subscription} from "rxjs";
import {HerbService} from "../../services/herb.service";

@Component({
  selector: 'app-herb-list',
  templateUrl: './herb-list.component.html',
  styleUrls: ['./herb-list.component.css']
})
export class HerbListComponent implements OnInit,OnDestroy {
  herbs : Herb[] = [];
  private subs: Subscription = new Subscription();

  constructor(private herbService: HerbService) { }

  ngOnInit(): void {
    this.subs.add(
      this.herbService.getHerbs().subscribe({
        next: value => { this.herbs = value },
        error: err => { alert("Hubo un error al recuperar las hierbas") }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
