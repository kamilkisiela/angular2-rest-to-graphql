import { db } from '../../../db';
import { toLink as toLinkBase } from './helpers';
import { toLink as toLinkDirector } from './directors';

export function toLink(req, movie) {
  return toLinkBase(req, 'movie', movie);
}

export function getMovies(req, res) {
  db.getMovies()
    .then(movies => {
      const response = movies
        .map(movie => ({
          href: toLink(req, movie)
        }));

      res.send(response);
    });
}

export function getMovie(req, res) {
  db.getMovie(parseInt(req.params.id))
    .then(movie => {
      const href = toLink(req, movie);

      res.send(
        Object.assign({}, movie, {
          href,
          director: toLinkDirector(req, { id: movie.director })
        })
      );
    })
    .catch(() => {
      res.status(404).send('no movie with that id found');
    });
}
