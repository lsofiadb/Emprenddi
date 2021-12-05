const { gql } = require("apollo-server");

const reservationTypeDefs = gql`
  type ReservationsDetails {
    id: Int!
    contractorId: Int!
    specialistId: Int!
    initialDate: String!
    finalDate: String!
    score: Int!
  }

  input Reservation {
    id: Int!
    contractorId: Int!
    specialistId: Int!
    initialDate: String!
    finalDate: String!
    score: Int!
  }

  extend type Query {
    getAllReservations: [ReservationsDetails]!
    getReservationsByContractor(contractorId: Int!): [ReservationsDetails]!
  }
`;

module.exports = reservationTypeDefs;
