import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'angular2-apollo';

import { client } from './apollo';
import { AppComponent } from './app.component';
// Director
import { DirectorComponent } from './director/director.component';
import { DirectorsListComponent } from './directors-list/directors-list.component';
import { DirectorsListContainerComponent } from './directors-list/directors-list-container.component';
// Movie
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesListContainerComponent } from './movies-list/movies-list-container.component';
// Shared
import { Data } from './shared/data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ApolloModule.withClient(client)
  ],
  declarations: [
    AppComponent,
    // Director
    DirectorComponent,
    DirectorsListComponent,
    DirectorsListContainerComponent,
    // Movie
    MovieComponent,
    MoviesListComponent,
    MoviesListContainerComponent
  ],
  providers: [
    Data
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
