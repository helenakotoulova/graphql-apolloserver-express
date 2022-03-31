const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  # dalsi type bychom napsali takhle
  type Book {
    bookName: String!
  }

  # Queries
  type Query {
    # za ten nazev te query (prip mutation) davame to, co to ma vracet. zde list of users.
    getAllUsers: [User!]! # tohle znamena list of users
  }

  # Mutations
  type Mutation {
    # zde chceme aby to vytvorilo noveho usera.
    createUser(name: String!, age: Int!, married: Boolean!): User!
  }
`;

module.exports = { typeDefs };
