import { db } from '../../../db';
import { toLink as toLinkBase } from './helpers';
import { toLink as toLinkMovie } from './movies';

export function toLink(req, director) {
  return toLinkBase(req, 'director', director);
}

export function getDirectors(req, res) {
  db.getDirectors().then(directors => {
    const response = directors
      .map(director => ({
        href: toLink(req, director)
      }));

    res.send(response);
  });
}


export function getDirector(req, res) {
  db.getDirector(parseInt(req.params.id))
    .then(director => {
      const href = toLink(req, director);

      res.send(
        Object.assign({
          href,
          movies: `${href}/movies`
        }, director)
      );
    })
    .catch(() => {
      res.status(404).send('no director with that id found');
    });
}


export function getMoviesByDirector(req, res) {
  const directorId = parseInt(req.params.id);

  db.getMoviesByDirector(directorId)
    .then(movies => {
      const response = movies
        .map(movie => ({
          href: toLinkMovie(req, movie)
        }));

      res.send(response);
    })
}
