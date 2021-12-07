const { ApolloError } = require("apollo-server-errors");

const reservationResolver = {
  Query: {
    getAllReservations: async (_, { reserve }, { dataSources, userIdToken }) => {
      if (userIdToken)
        return await dataSources.reservationAPI.getAllReservations();
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
    getReservationsByContractor: async (_, { contractorId }, { dataSources, userIdToken }) => {
      if (contractorId == userIdToken)
        return await dataSources.reservationAPI.getReservationsByContractor(contractorId);
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
    getReservesBySpecialist: async (_, { specialistId }, { dataSources, userIdToken }) => {
      if (userIdToken)
        return await dataSources.reservationAPI.getReservesBySpecialist(specialistId);
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
    getSpecialistScore: async (_, { specialistId }, { dataSources, userIdToken }) => {
      if (userIdToken)
        return await dataSources.reservationAPI.getSpecialistScore(specialistId);
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
    getArrayWithReserveTime: async (_, { reserve }, { dataSources, userIdToken }) => {
      if (userIdToken)
        return await dataSources.reservationAPI.getArrayWithReserveTime();
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
    getReserveById: async (_, { reserveId }, { dataSources, userIdToken }) => {
      if (userIdToken)
        return await dataSources.reservationAPI.getReserveById(reserveId);
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
  },

  Mutation: {
    createReserve: async (_, { reserveInput }, { dataSources, userIdToken }) => {
      if (userIdToken) {
        const authInput = {
          id: reserveInput.id,
          contractorId: reserveInput.contractorId,
          specialistId: reserveInput.specialistId,
          initialDate: reserveInput.initialDate,
          finalDate: reserveInput.finalDate,
          score: reserveInput.score,
        };

        return await dataSources.reservationAPI.createReserve(authInput);
      } else {
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
      }
    },

    updateReserve: async (_, { reserveInput }, { dataSources, userIdToken }) => {
      if (userIdToken) {
        const authInput = {
          id: reserveInput.id,
          contractorId: reserveInput.contractorId,
          specialistId: reserveInput.specialistId,
          initialDate: reserveInput.initialDate,
          finalDate: reserveInput.finalDate,
          score: reserveInput.score,
        };

        return await dataSources.reservationAPI.updateReserve(authInput);
      } else {
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
      }
    },

    deleteReserve: async (_, { reserveId }, { dataSources, userIdToken }) => {
      if (userIdToken)
        return await dataSources.reservationAPI.deleteReserve(reserveId);
      else
        throw new ApolloError("No estás autorizado para acceder a esta información", 401);
    },
  },
};

module.exports = reservationResolver;
