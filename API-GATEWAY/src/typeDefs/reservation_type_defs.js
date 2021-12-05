const { gql } = require("apollo-server");

const reservationTypeDefs = gql`
  type ReservationsDetail {
    id: Int!
    contractorId: Int!
    specialistId: Int!
    initialDate: String!
    finalDate: String!
    score: Int!
  }

  type ScoreReservation {
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

  type Mutation {
    createReserve(reserveInput :Reservation): ReservationsDetail!
    updateReserve(reserveInput :Reservation): ReservationsDetail!
    deleteReserve(reserveId: Int!): String!
  }

  extend type Query {
    getAllReservations: [ReservationsDetail]!
    getReservationsByContractor(contractorId: Int!): [ReservationsDetail]!
    getReservesBySpecialist(specialistId: Int!): [ReservationsDetail]!
    getSpecialistScore(specialistId: Int!): ScoreReservation!
    getArrayWithReserveTime: [ReservationsDetail]!
    getReserveById(reserveId: Int!): ReservationsDetail!
  }
`;

module.exports = reservationTypeDefs;
