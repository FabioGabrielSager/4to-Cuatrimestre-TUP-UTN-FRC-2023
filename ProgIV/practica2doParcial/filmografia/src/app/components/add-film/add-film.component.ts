import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Actor, Chapter, Film} from "../../models/Film";
import {FilmsService} from "../../services/films.service";
import {UniqueNameAsyncValidator} from "../../validators/unique-name-async-validator.service";
import {Router} from "@angular/router";
import {Continent, Country} from "../../models/Pais";
import {ContriesService} from "../../services/contries.service";
import {startWithStringValidation} from "../../validators/startWithStringValidation";

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit,OnDestroy{
  form: FormGroup = this.fb.group({});
  subs: Subscription = new Subscription();
  continents: Continent[] = [];
  countries: Country[] = [];

  constructor(private fb: FormBuilder, private filmService: FilmsService,
              private uniqueNameValidator: UniqueNameAsyncValidator,
              private router: Router, private countryService: ContriesService) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)],
        [this.uniqueNameValidator.validate.bind(this.uniqueNameValidator)]],
      continent: ["", Validators.required],
      country: [{value:"", disabled: true}, Validators.required],
      type: ["", [Validators.required]],
      gnere: ["", [Validators.required, Validators.minLength(1), startWithStringValidation]],
      actors: this.fb.array([]),
      details: this.fb.array([])
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(
      this.form.controls['type'].valueChanges.subscribe(
        value => {
          this.detailsFormArray.clear();
          if(value == 'Serie') {
            this.detailsFormArray.push(this.createChapterForm());
          }
          else {
            this.detailsFormArray.push(this.fb.group({
              lenght: ["", [Validators.required]]
            }))
          }
        }
      )
    );

    this.subs.add(
      this.countryService.getAllContinents().subscribe({
        next: value => {
          this.continents = value;
        },
        error: err => {alert(err.message)}
      })
    );

    this.subs.add(
      this.form.controls['continent'].valueChanges.subscribe(
        value => {
          this.subs.add(
            this.countryService.getContriesByContinent(value).subscribe({
              next: value => {
                this.countries = value;
                this.form.controls['country'].enable();
              },
              error: err => {alert(err.message)}
            })
          )
        }
      )
    );
  }

  addChapterForm() {
    this.detailsFormArray.push(this.createChapterForm());
  }

  deleteChapterForm(index: number){
    this.detailsFormArray.removeAt(index);
  }

  addActorForm(){
    this.actorsFormArray.controls.push(this.createActorsForm());
  }

  deleteActorForm(index: number){
    this.actorsFormArray.removeAt(index);
  }

  createActorsForm(){
    return this.fb.group({
        actorName: ["", [Validators.required, Validators.minLength(5)]],
        actorLastName: ["", [Validators.required, Validators.minLength(5)]]
      }
    );
  }

  createChapterForm(){
    return this.fb.group({
        chapterName: ["", [Validators.required, Validators.minLength(5)]],
        chapterDuration: ["", [Validators.required, Validators.min(1)]]
      }
    );
  }

  get actorsFormArray(){
    return this.form.controls['actors'] as FormArray;
  }

  get detailsFormArray(){
    return this.form.controls['details'] as FormArray;
  }

  onSubmit(){
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let actors: Actor[] = [];
    for(let i = 0; i < this.actorsFormArray.length; i++){
      actors.push({
        id: i,
        name: this.actorsFormArray.controls[i].get('actorName')?.value,
        lastName: this.actorsFormArray.controls[i].get('actorLastName')?.value
      });
    }

    let newFilm: Film = new Film();

    newFilm.name = this.form.controls['name'].value;
    newFilm.type = this.form.controls['type'].value;
    newFilm.actors = actors;
    newFilm.gnere = this.form.controls['gnere'].value;
    newFilm.lenght =
        this.form.controls['type'].value == 'Movie'
            ? this.detailsFormArray.controls[0].get('lenght')?.value : undefined;
    newFilm.country = this.form.controls['country'].value;

    if(this.form.controls['type'].value != 'Movie'){
      let chapters: Chapter[] = [];
      for(let i = 0; i < this.detailsFormArray.length; i++){
        chapters.push({
          id: i,
          name: this.detailsFormArray.controls[i].get('chapterName')?.value,
          duration: this.detailsFormArray.controls[i].get('chapterDuration')?.value
        });
      }
      newFilm.chapters = chapters;
    }

    this.subs.add(
        this.filmService.addFilm(newFilm).subscribe({
          next: value => {
            alert("operación exitosa");
            this.router.navigate(['/list-films']);
            this.form.reset();
          },
          error: err => {alert("Hubo un error: " + err.message)}
        })
    )
  }
}
