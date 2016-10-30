import { Component, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';

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
  directors: ApolloQueryObservable<any>;

  constructor(
    private apollo: Angular2Apollo
  ) {}

  ngOnInit() {
    this.directors = this.apollo.watchQuery({
      query: directorsQuery
    });
  }
}