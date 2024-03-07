import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../models/Movie";
import {ActivatedRoute} from "@angular/router";
import {OmddApiClientService} from "../../services/omdd-api-client.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  subs: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private omddService: OmddApiClientService) {
  }

  ngOnInit(): void {
    this.subs.add(
      this.activatedRoute.params.subscribe(params => {
        this.subs.add(
          this.omddService.getMovieByOmddId(params['imdbID']).subscribe({
            next: value => {
              this.movie = value
            },
            error: err => {
              console.log(err)
            }
          })
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  protected readonly moveBy = moveBy;
}
