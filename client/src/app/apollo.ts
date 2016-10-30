import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:4000/graphql',
  batchInterval: 10
});

export const client = new ApolloClient({
  networkInterface
});

