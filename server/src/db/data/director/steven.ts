import { Director, Movie } from '../models';

const movies: Movie[] = [{
  title: 'Saving Private Ryan',
  description: `Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.`,
  releasedIn: 1998
}, {
  title: `Schindler's List`,
  description: `In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.`,
  releasedIn: 1993
}];

const data: Director = {
  firstName: 'Steven',
  lastName: 'Spielberg',
  birthday: new Date(1946, 12, 18),
  bio: `Undoubtedly one of the most influential film personalities in the history of film, Steven Spielberg is perhaps Hollywood's best known director and one of the wealthiest filmmakers in the world. Spielberg has countless big-grossing, critically acclaimed credits to his name, as producer, director and writer...`,
  movies
};

export default data;
