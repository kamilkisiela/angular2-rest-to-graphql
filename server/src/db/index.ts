import { pick } from 'lodash'; 

import { IMDB, Director, Movie } from './imdb';
import data, { Director as DirectorData, Movie as MovieData } from './data';

const db: IMDB = new IMDB;

// Fill IMDB up with data 
data.forEach(addDirector(db));

export {
  db
}

// helpers

function addMovie(imdb: IMDB, directorId: number) {
  return (movie: MovieData) => {
    imdb.addMovie(
      Object.assign({}, movie, {
        director: directorId,
        image: addImage('director', movie.title)
      })
    );
  };
}

function addDirector(imdb: IMDB) {
  return (director: DirectorData) => {
    const directorId = imdb.addDirector(
      Object.assign({
        image: addImage('director', director.firstName)
      }, pick<Director, DirectorData>(director, [
        'firstName',
        'lastName',
        'birthday',
        'bio'
      ]))
    );

    director.movies.forEach(addMovie(imdb, directorId));
  }
}

function addImage(type: string, name: string): string {
  const fileName: string = name
    .replace(/[^a-z\ ]+/ig, '')
    .replace(/[\ ]+/ig, '-')
    .toLowerCase();

  return `http://localhost:4000/static/${type}/${fileName}.png`
} 
