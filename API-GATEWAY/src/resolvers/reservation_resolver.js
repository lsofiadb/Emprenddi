const reservationResolver = {
  Query: {
    getAllReservations: async (_, { reserve }, { dataSources }) => {
      return await dataSources.reservationAPI.getAllReservations();
    },
    getReservationsByContractor: async (_, { contractorId }, { dataSources }) => {
      return await dataSources.reservationAPI.getReservationsByContractor(contractorId);
    },
    getReservesBySpecialist: async (_, { specialistId }, { dataSources }) => {
      return await dataSources.reservationAPI.getReservesBySpecialist(specialistId);
    },
    getSpecialistScore: async (_, { specialistId }, { dataSources }) => {
      return await dataSources.reservationAPI.getSpecialistScore(specialistId);
    },
    getArrayWithReserveTime: async (_, { reserve }, { dataSources }) => {
      return await dataSources.reservationAPI.getArrayWithReserveTime();
    },
    getReserveById: async (_, { reserveId }, { dataSources }) => {
      return await dataSources.reservationAPI.getReserveById(reserveId);
    },
  },
  
  Mutation: {
    createReserve: async (_, { reserveInput }, { dataSources }) => {
      const authInput = {
        id: reserveInput.id,
        contractorId: reserveInput.contractorId,
        specialistId: reserveInput.specialistId,
        initialDate: reserveInput.initialDate,
        finalDate: reserveInput.finalDate,
        score: reserveInput.score,
      };

      return await dataSources.reservationAPI.createReserve(authInput);
    },

    updateReserve: async (_, { reserveInput }, { dataSources }) => {
      const authInput = {
        id: reserveInput.id,
        contractorId: reserveInput.contractorId,
        specialistId: reserveInput.specialistId,
        initialDate: reserveInput.initialDate,
        finalDate: reserveInput.finalDate,
        score: reserveInput.score,
      };

      return await dataSources.reservationAPI.updateReserve(authInput);
    },

    deleteReserve: (_, { reserveId }, { dataSources }) =>
      dataSources.reservationAPI.deleteReserve(reserveId),
  },
};

module.exports = reservationResolver;
