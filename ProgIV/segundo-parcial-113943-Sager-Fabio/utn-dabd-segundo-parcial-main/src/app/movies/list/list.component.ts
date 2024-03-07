import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import { Movie } from 'src/app/models/Movie';
import {Subscription} from "rxjs";

@Component({
  selector: 'ma-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  movies: Movie[] = [];
  private subs: Subscription = new Subscription();
  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.subs.add(
        this.movieService.getAllMovies().subscribe({
          next: value => { this.movies = value.data },
          error: err => { alert("Hubo un error: " + err.message) }
        })
    )
  }
}
