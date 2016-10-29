import * as express from 'express';

import '../../db';
import { getDirectors, getDirector, getMoviesByDirector } from './controllers/directors';
import { getMovies, getMovie } from './controllers/movies';

const router = express.Router(); 

// Directors
router.get('/directors', getDirectors);
router.get('/director/:id', getDirector);
router.get('/director/:id/movies', getMoviesByDirector);

// Movies
router.get('/movies', getMovies);
router.get('/movie/:id', getMovie);

export default router;
