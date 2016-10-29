import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-list',
  template: `
    <movie *ngFor="let movie of movies" [movie]="movie"></movie>
  `
})
export class MoviesListComponent {
  @Input() movies: any[];
} 
