import { gql } from 'apollo-server-express';
import userModel from './userModel';

export const typeDefs = gql`
  type User {
    id: ID
    name: String!
    email: String!
    password: String!
    created_at: Int!
    favorites: [MinimalFestival]
  }
  type Query {
    users: [User]
  }
  input CreateUserInput {
    id: Int
    name: String
    email: String
    password: String
    created_at: Int
    favorites: [MinimalFestival]
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: Int!, input: CreateUserInput!): User
    deleteUser(id: Int!): User
  }
`;

export const resolvers = {
  Query: {
    users() {
      return userModel.list();
    },
  },
  User: {
    favorites(source) {
      if (!source.favorites || !source.favorites.length) {
        return;
      }
      return Promise.all(source.favorites.map(({ id }) => userModel.find(id)));
    },
  },
  Mutation: {
    createUser(source, args) {
      return userModel.create(args.input);
    },
    updateUser(source, args) {
      return userModel.updata(args.id, args.input);
    },
    deleteUser(source, args) {
      return userModel.delete(args.id);
    },
  },
};
