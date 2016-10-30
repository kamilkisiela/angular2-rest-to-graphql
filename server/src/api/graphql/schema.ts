const rootSchema = [`
  
  type Director {
    id: Int!
    firstName: String!
    lastName: String!
    birthday: Float!
    bio: string
    image: string!
  }

  type Query {
    directors: [Director]
  }

  schema {
    query: Query
  }

`];
