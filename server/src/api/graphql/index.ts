import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

export default function (app) {
  app.use('/graphql', graphqlExpress({
    // options
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
}
