export interface Movie {
  title: string;
  description: string;
  releasedIn: number;
}

export interface Director {
  firstName: string;
  lastName: string;
  birthday: Date;
  bio: string;
  movies: Movie[];
}
