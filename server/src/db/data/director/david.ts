import { Director, Movie } from '../models';

const movies: Movie[] = [{
  title: 'Fight Club',
  description: `An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.`,
  releasedIn: 1999
}, {
  title: 'The Social Network',
  description: `Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.`,
  releasedIn: 2010
}];

const data: Director = {
  firstName: 'David',
  lastName: 'Fincher',
  birthday: new Date(1962, 8, 28),
  bio: `David Fincher was born in 1962 in Denver, Colorado, and was raised in Marin County, California. When he was 18 years old he went to work for John Korty at Korty Films in Mill Valley. He subsequently worked at ILM (Industrial Light and Magic) from 1981-1983. Fincher left ILM to direct TV commercials and music videos after signing with N...`,
  movies
};

export default data;
