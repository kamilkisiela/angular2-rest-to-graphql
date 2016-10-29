import { Director, Movie } from './models';

import David from './director/david';
import Joel from './director/joel';
import Martin from './director/martin';
import Quentin from './director/quentin';
import Steven from './director/steven';

const data: Director[] = [
  David,
  Joel,
  Martin,
  Quentin,
  Steven
];

export default data; 
export {
  Director,
  Movie
}