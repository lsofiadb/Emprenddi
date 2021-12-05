const reservationResolver = {
  Query: {
    getAllReservations: async (_, { reserve }, { dataSources }) => {
      return await dataSources.ReservationAPI.getAllReservations();
    },
    getReservationsByContractor: async (_, { contractorId }, { dataSources }) => {
      return await dataSources.ReservationAPI.getReservationsByContractor(contractorId);
    },
    getReservesBySpecialist: async (_, { specialistId }, { dataSources }) => {
      return await dataSources.ReservationAPI.getReservesBySpecialist(specialistId);
    },
    getSpecialistScore: async (_, { specialistId }, { dataSources }) => {
      return await dataSources.ReservationAPI.getSpecialistScore(specialistId);
    },
    getArrayWithReserveTime: async (_, { reserve }, { dataSources }) => {
      return await dataSources.ReservationAPI.getArrayWithReserveTime();
    },
    getReserveById: async (_, { reserveId }, { dataSources }) => {
      return await dataSources.ReservationAPI.getReserveById(reserveId);
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

      return await dataSources.ReservationAPI.createReserve(authInput);
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

      return await dataSources.ReservationAPI.updateReserve(authInput);
    },

    deleteReserve: (_, { reserveId }, { dataSources }) =>
      dataSources.ReservationAPI.deleteReserve(reserveId),
  },
};

module.exports = reservationResolver;
