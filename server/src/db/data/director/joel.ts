import { Director, Movie } from '../models';

const movies: Movie[] = [{
  title: 'No Country for Old Men',
  description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
  releasedIn: 2007
}, {
  title: `The Big Lebowski`,
  description: `"The Dude" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.`,
  releasedIn: 1998
}];

const data: Director = {
  firstName: 'Joel',
  lastName: 'Coen',
  birthday: new Date(1954, 11, 29),
  bio: `Part of the dynamic duo that is the Coen Brothers, director/writer Joel has teamed with producer/writer Ethan to collaborate on some of the more darkly humorous films (Fargo, The Big Lebowski) of the past 20 years. Their adaptation of Cormac McCarthy's No Country for Old Men won both Best Picture and Best Director in 2008.`,
  movies
};

export default data;
