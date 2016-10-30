import { graphqlExpress } from 'graphql-server-express';

export default function (app) {
  app.use('/graphql', graphqlExpress({
    // options
  }));
}
