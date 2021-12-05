const reservationResolver = {
  Query: {
    getAllReservations: async (_, { reservationId }, { dataSources }) => {
      return await dataSources.ReservationAPI.getAllReservations;
    },
    getReservationsByContractor: async (
      _,
      { contractorId },
      { dataSources }
    ) => {
      return await dataSources.ReservationAPI.getReservationsByContractor;
    },
  },
};
module.exports = reservationResolver;

// getAllSpecialist: async (_, { specialistId }, { dataSources }) => {
//   return await dataSources.authAPI.getAllSpecialist();
// },
