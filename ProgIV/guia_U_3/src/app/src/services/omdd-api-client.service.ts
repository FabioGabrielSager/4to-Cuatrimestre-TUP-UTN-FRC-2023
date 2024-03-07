import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OmddApiClientService {

  private API_KEY: string = "808ad5af";
  constructor(private obddClient: HttpClient) {  }

  public getMoviesOfPirates(): Observable<any>{
    return this.obddClient.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=Pirates`);
  }

  public getMoviesByTitle(title: string): Observable<any>{
    return this.obddClient.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${title}`);
  }

  public getMoviesByTitleAndPage(title: string, page: number): Observable<any>{
    return this.obddClient.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${title}&page=${page}`);
  }

  public getMovieByOmddId(omddId: string): Observable<any>{
    return this.obddClient.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${omddId}`)
  }
}
