import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Data } from '../shared/data.service';

const directorsQuery = `
  query getDirectors {
    directors {
      id
      firstName
      lastName
      image
    }
  }
`;

@Component({
  selector: 'directors-list-container',
  template: `
    <directors-list [directors]="directors | async"></directors-list>
  `
})
export class DirectorsListContainerComponent implements OnInit {
  directors: Observable<any[]>;

  constructor(
    private data: Data
  ) {}

  ngOnInit() {
    this.directors = this.data.getDirectors();
  }
}