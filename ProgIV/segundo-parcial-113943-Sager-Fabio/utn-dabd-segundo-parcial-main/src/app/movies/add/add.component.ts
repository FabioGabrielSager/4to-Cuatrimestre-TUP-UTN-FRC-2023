import {Component, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Actor, Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";
import {UniqueTitleValidator} from "../validators/unique-title-validator";
import {LinkValidator} from "../validators/LinkValidator";

@Component({
  selector: 'ma-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnDestroy{
  form: FormGroup = this.fb.group({});
  private subs: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private movieService: MovieService
              , private uniqueTitleValidator: UniqueTitleValidator) {
    this.form = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)],
      [this.uniqueTitleValidator.validate.bind(this.uniqueTitleValidator)]],
      year: ["", [Validators.min(1900), Validators.max(2023)]],
      extract: ["", [Validators.minLength(15), Validators.required]],
      cast: this.fb.array([this.createActorForm()]),
      href: ["", LinkValidator]
    })
  }

  createActorForm(){
    return this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      lastName: ["", [Validators.required, Validators.maxLength(20)]]
    });
  }

  addActorForm(){
    this.castFormArray.push(this.createActorForm());
  }

  removeActorForm(index: number){
    this.castFormArray.removeAt(index);
  }

  get castFormArray(){
    return this.form.controls['cast'] as FormArray;
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    let newMovie: Movie = new Movie();
    newMovie.title = this.form.controls['title'].value;
    newMovie.href = this.form.controls['href'].value;
    newMovie.year = this.form.controls['year'].value;
    newMovie.extract = this.form.controls['extract'].value;
    newMovie.cast = [];
    for(let i: number = 0; i < this.castFormArray.length; i++){
      let actor: Actor = new Actor();
      actor.firstName = this.castFormArray.controls[i].get('name')?.value;
      actor.lastName = this.castFormArray.controls[i].get('lastName')?.value;
      newMovie.cast.push(actor);
    }

    this.subs.add(
      this.movieService.addMove(newMovie).subscribe({
        next: value => {
          alert("Pelicula agregada");
          this.form.reset();
        },
        error: err => {
          alert("Hubo un error: " + err.message)
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
