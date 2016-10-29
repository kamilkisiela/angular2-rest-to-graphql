import { Director, Movie } from '../models';

const movies: Movie[] = [{
  title: 'Pulp Fiction',
  description: `The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  releasedIn: 1994
}, {
  title: `Reservoir Dogs`,
  description: `After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.`,
  releasedIn: 1998
}];

const data: Director = {
  firstName: 'Quentin',
  lastName: 'Tarantino',
  birthday: new Date(1963, 3, 27),
  bio: `Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee. Quentin moved with his mother to Torrance, California, when he was four years old. In January of 1992, first-time writer-director Tarantino's ...`,
  movies
};

export default data;
