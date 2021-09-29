import { gql } from 'apollo-server-express';
import festivalModel from './festivalModel';

export const typeDefs = gql`
  type Festival {
    id: ID
    name: String
    date: String
    venue: String
    place: String
    description: String
    artists: [String]
    genres: [String]
  }
  type Query {
    festivals: [Festival]
  }
`;

export const resolvers = {
  Query: {
    festivals() {
      return festivalModel.list();
    },
  },
};
