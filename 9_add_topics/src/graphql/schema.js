//? This file will tell what will be the structure of the data

const { gql } = require("graphql-tag");

//? Data types provided by graphQL
//* String
//* Int
//* Float
//* Boolean
//* ID -> an unique identifier

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Int!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product!
  }
`;

// Creatings the queries
