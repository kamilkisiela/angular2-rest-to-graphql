import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Data } from '../shared/data.service';

@Component({
  selector: 'movies-list-container',
  template: `
    <movies-list [movies]="movies | async"></movies-list>
  `
})
export class MoviesListContainerComponent implements OnInit {
  @Input() director: any;
  movies: Observable<any[]>;

  constructor(
    private data: Data
  ) {}

  ngOnInit() {
    this.movies = this.data.getMoviesByDirector(this.director.id);
  }
}