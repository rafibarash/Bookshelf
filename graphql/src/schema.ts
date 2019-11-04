import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    books: [Book]!
    book(id: ID!): Book
    bookshelves: [Bookshelf]!
    bookshelf(id: ID!): Bookshelf
    user(id: ID!): User
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    summary: String
    reviews: [Review]!
  }

  type Bookshelf {
    id: ID!
    name: String!
    description: String
    books: [Book]!
    user: User!
    public: Boolean!
  }

  type User {
    id: ID!
    name: String!
    bookshelves: [Bookshelf]!
    books: [Book]!
    reviews: [Review]!
  }

  type Review {
    id: ID!
    title: String!
    description: String
    user: User!
    book: Book!
  }

  type Mutation {
    addBook(book: ID!, bookshelf: ID!): BookshelfUpdateResponse!
    removeBook(book: ID!, bookshelf: ID!): BookshelfUpdateResponse!
    login(email: String): String  # returns login token
  }

  type BookshelfUpdateResponse {
    success: Boolean!
    message: String
  }
`;

export default typeDefs;
