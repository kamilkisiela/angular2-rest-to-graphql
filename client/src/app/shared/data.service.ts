import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class Data {
  static API_URL: string = 'http://localhost:4000/api';

  constructor(
    private http: Http
  ) {}

  /**
   * Fetches directors
   */
  getDirectors(): Observable<any[]> {
    return this.fetch(['directors'])
      .switchMap(results => this.resolveLinks(results));
  }

  /**
   * Fetches movies of a director
   */
  getMoviesByDirector(id: number): Observable<any[]> {
    return this.fetch(['director', id, 'movies'])
      .switchMap(results => this.resolveLinks(results));
  }

  /**
   * Makes GET request and maps to json()
   */
  private fetch(path: any, absolute: boolean = false): Observable<any> {
    const url = this.resolvePath(path);

    
    return this.http.get(
      absolute ? url : Data.API_URL + '/' + url
    )
      .map(data => data.json())
  }


  /**
   * Turns list of links into list with data
   */
  private resolveLinks(list: any[]): Observable<any[]> {
    return Observable.combineLatest(
      list.map(item => this.fetch(item.href, true))
    );
  }

  /**
   * How it works:
   * ['director', 1, 'movies']
   * =>
   * director/1/movies
   */
  private resolvePath(path: any): string {
    return path.charAt ? path : path.join('/');
  }
}
