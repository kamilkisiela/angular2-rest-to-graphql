export interface Director {
  id?: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  bio: string;
  image: string;
}

export interface Movie {
  id?: number;
  director: number;
  title: string;
  description: string;
  releasedIn: number;
  image: string;
}

export class IMDB {
  private directors: Director[];
  private movies: Movie[];

  constructor() {
    this.directors = [];
    this.movies = [];
  }

  addMovie(movie: Movie): number {
    return this.movies.push(
      Object.assign({id: this.movies.length + 1}, movie)
    );
  }

  addDirector(director: Director): number {
    return this.directors.push(
      Object.assign({id: this.directors.length + 1}, director)
    );
  }

  getDirectors(): Promise<Director[]> {
    return Promise.resolve(this.directors);
  }

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(this.movies);
  }

  getDirector(id: number): Promise<Director> {
    return this.wrapWithPromise<Director>(
      this.directors.find((director: Director) => director.id === id)
    );
  }

  getMovie(id: number): Promise<Movie> {
    return this.wrapWithPromise<Movie>(
      this.movies.find((movie: Movie) => movie.id === id)
    );
  }

  getMoviesByDirector(id: number): Promise<Movie[]> {
    return this.wrapWithPromise<Movie[]>(
      this.movies.filter((movie: Movie) => movie.director === id)
    );
  }

  private wrapWithPromise<T>(result: any): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!result) {
        reject();
      } else {
        resolve(result);
      }
    });
  }
}
