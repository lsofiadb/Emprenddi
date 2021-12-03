const { gql } = require("apollo-server");

const authTypeDefs = gql`
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  input CredentialsInput {
    username: String!
    password: String!
  }

  input SignUpInputContractor {
    dni: Int!
    username: String!
    password: String!
    name: String!
    lastname: String!
    age: Int!
    email: String!
    telephone_number: Float!
    city: String!
    address: String!
  }

  input SignUpInputSpecialist {
    dni: Int!
    name: String!
    lastname: String!
    age: Int!
    email: String!
    telephone_number: Float!
    city: String!
    priceXhour: Int!
    description: String!
    category: String!
    url: String!
    score: String!
  }

  type SpecialistDetail {
    id: Int!
    dni: Int!
    name: String!
    lastname: String!
    age: Int!
    email: String!
    telephone_number: Float!
    city: String!
    priceXhour: Int!
    description: String!
    category: String!
    url: String!
    score: String!
  }

  type ContractorDetail {
    id: Int!
    dni: Int!
    username: String!
    password: String!
    name: String!
    lastname: String!
    age: Int!
    email: String!
    telephone_number: Float!
    city: String!
    address: String!
  }

  type Mutation {
    signUpContractor(userInput: SignUpInputContractor): Tokens!
    signUpSpecialist(userInput: SignUpInputSpecialist): SpecialistDetail!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
    deleteContractorById(contractorId: Int!): String!
    deleteSpecialistById(specialistId: Int!): String!
  }

  type Query {
    getAllSpecialist: [SpecialistDetail]!
    getSpecialistById(specialistId: Int!): SpecialistDetail!
    filterSpecialistByCategory(category: String!): [SpecialistDetail]!
    getAllContractor: [ContractorDetail]!
    getContractorById(contractorId: Int!): ContractorDetail!
  }
`;

module.exports = authTypeDefs;
