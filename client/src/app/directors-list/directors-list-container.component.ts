import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Angular2Apollo } from 'angular2-apollo';

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
    private apollo: Angular2Apollo
  ) {}

  ngOnInit() {}
}