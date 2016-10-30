import { Component, Input, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';

import gql from 'graphql-tag';

const moviesQuery = gql`
  query getMovies ($id: Int!) {
    moviesByDirector(id: $id) {
      title
      releasedIn
    }
  }
`;

@Component({
  selector: 'movies-list-container',
  template: `
    <movies-list [movies]="movies | async | select: 'moviesByDirector'"></movies-list>
  `
})
export class MoviesListContainerComponent implements OnInit {
  @Input() director: any;
  movies: ApolloQueryObservable<ApolloQueryResult>;

  constructor(
    private apollo: Angular2Apollo
  ) {}

  ngOnInit() {
    this.movies = this.apollo.watchQuery({
      query: moviesQuery,
      variables: {
        id: this.director.id
      }
    });
  }
}