import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../models/Movie";
import {OmddApiClientService} from "../../services/omdd-api-client.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
    styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit, OnDestroy {
    movies: Movie[] = [];
    form: FormGroup = this.fb.group({});
    subs: Subscription = new Subscription();
    pags: number[] = [];
    currentPage: number = 1;

    constructor(private obdbService: OmddApiClientService, private fb: FormBuilder) {
        this.form = this.fb.group({
            title: ["Pirates", Validators.required]
        });
    }

    ngOnInit(): void {
        this.pags = Array.from({length: 100 - 1 + 1}, (_, i) => i + 1);

        this.subs.add(
            this.form.controls['title'].valueChanges.subscribe(
                value => {
                    this.subs.add(
                        this.obdbService.getMoviesByTitle(value).subscribe(
                            response => {
                                this.movies = response.Search;
                                this.currentPage = 1;
                            }
                        )
                    )
                }
            )
        );


        this.subs.add(
            this.obdbService.getMoviesOfPirates().subscribe(
                {
                    next: (response: any) => {
                        this.movies = response.Search;
                    },
                    error: err => {
                        console.log(err)
                    }
                }
            )
        );
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    onPagSelected(pag: number) {
        this.currentPage = pag;
        this.subs.add(
            this.obdbService.getMoviesByTitleAndPage(this.form.controls['title'].value, pag).subscribe(
                {
                    next: (response: any) => {
                        this.movies = response.Search;
                    },
                    error: err => {
                        console.log(err)
                    }
                }
            )
        );
    }
}
