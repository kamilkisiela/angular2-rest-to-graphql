import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

export const client = new ApolloClient({
  networkInterface
});

