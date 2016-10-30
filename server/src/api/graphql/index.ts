import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './schema';
import { db } from '../../db';

export default function (app) {
  app.use('/graphql', graphqlExpress({
    schema,
    context: {
      db
    }
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
}
