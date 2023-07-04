
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Pet {
    _id: ID!
    name: String!
    species: String!
    breed: String!
    age: Int
    gender: String!
    color: String!
    isAdopted: Boolean!
    availableDate: String
    description: String
    images: [String]
}

type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    address: String!
    phone: String!
    savedPets: [Pet]
    donations: Number
}

type Query {
    getPets: [Pet]
    getPetById(id: ID!): Pet
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): User
    savePet(userId: ID!, petId: ID!): User
    unSavePet(userId: ID!, petId: ID!): User
  }
  
  input UserInput {
    name: String!
    email: String!
    password: String!
    address: String!
    phone: String!
  }`

  module.exports = typeDefs;

