import {Component, OnInit} from '@angular/core';
import {Film} from "../../models/Film";
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit{
  films: Film[] = [];

  constructor(private filmService: FilmsService) {
  }

  ngOnInit(): void {
    this.filmService.getAll().subscribe(
        {
          next: value => {
            this.films = value;
          },
          error: err => {alert(err.message)}
        }
    )
  }
}
