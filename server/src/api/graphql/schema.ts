import { makeExecutableSchema } from 'graphql-tools';

const rootSchema = [`
  
  type Director {
    id: Int!
    firstName: String!
    lastName: String!
    birthday: Float!
    bio: String
    image: String!
    movies: [Movie]
  }

  type Movie {
    id: Int!
    director: Director!
    title: String!
    description: String
    releasedIn: Int!
    image: String
  }

  type Query {
    directors: [Director]
    movies: [Movie]
    moviesByDirector(id: Int!): [Movie]
  }

  schema {
    query: Query
  }

`];

const rootResolvers = {
  Query: {
    directors(root, args, context) {
      return context.db.getDirectors();
    },

    movies(root, args, context) {
      return context.db.getMovies();
    },

    moviesByDirector(root, args, context) {
      return context.db.getMoviesByDirector(args.id);
    }
  },


  Movie: {
    director(root, args, context) {
      return context.db.getDirector(root.director);
    }
  },


  Director: {
    movies(root, args, context) {
      return context.db.getMoviesByDirector(root.id);
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs: rootSchema,
  resolvers: rootResolvers
});

export default schema;
