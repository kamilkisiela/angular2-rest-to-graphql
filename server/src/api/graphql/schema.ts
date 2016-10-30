import { makeExecutableSchema } from 'graphql-tools';

const rootSchema = [`
  
  type Director {
    id: Int!
    firstName: String!
    lastName: String!
    birthday: Float!
    bio: String
    image: String!
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
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs: rootSchema,
  resolvers: rootResolvers
});

export default schema;
