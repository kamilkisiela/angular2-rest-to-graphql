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

  type Query {
    directors: [Director]
  }

  schema {
    query: Query
  }

`];

const rootResolvers = {
  Query: {
    directors() {
      return [];
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs: rootSchema,
  resolvers: rootResolvers
});

export default schema;
