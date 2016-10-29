import { Director, Movie } from '../models';

const movies: Movie[] = [{
  title: 'The Wolf of Wall Street',
  description: `Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.`,
  releasedIn: 2013
}, {
  title: 'Goodfellas',
  description: `Henry Hill and his friends work their way up through the mob hierarchy.`,
  releasedIn: 1990
}];

const data: Director = {
  firstName: 'Martin',
  lastName: 'Scorsese',
  birthday: new Date(1942, 11, 17),
  bio: `Martin Charles Scorsese was born on November 17, 1942 in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily. He was raised in the neighborhood of Little Italy, which later provided the inspiration for several of his films...`,
  movies
};

export default data;
