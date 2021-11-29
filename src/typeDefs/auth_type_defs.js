const { gql } = require('apollo-server')

const authTypeDefs = gql `
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

    input SignUpInput {
        dni: Int!
		username: String!
        password: String!
        name: String!
		lastname: String!
		age: Int!
        email: String!
		telephoneNumber: Int!
		city: String!
        address: String!
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

    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Query {
        userDetailById(userId: Int!): SpecialistDetail!
        getAllSpecialist: [SpecialistDetail]!
    }
`

module.exports = authTypeDefs