const usersResolver = {
  Query: {
    getAllSpecialist: async (_, { specialistId }, { dataSources }) => {
      return await dataSources.authAPI.getAllSpecialist();
    },
    getSpecialistById: async (_, { specialistId }, { dataSources }) => {
      return await dataSources.authAPI.getSpecialist(specialistId);
    },
    filterSpecialistByCategory: async (_, { category }, { dataSources }) => {
      return await dataSources.authAPI.filterSpecialist(category);
    },
    getAllContractor: async (_, { contractorId }, { dataSources }) => {
      return await dataSources.authAPI.getAllContractor();
    },
    getContractorById: async (_, { contractorId }, { dataSources }) => {
      return await dataSources.authAPI.getContractor(contractorId);
    },
    //TODO: Complete these endpoints with MS1 and MS2
    // getSpecialistScore: async (_, { specialistId }, { dataSources }) => {
    //   return await dataSources.authAPI.getSpecialistScore(specialistId);
    // },
    // getSpecialistPrice: async (_, { specialistId }, { dataSources }) => {
    //   return await dataSources.authAPI.getSpecialistPrice(specialistId);
    // },
  },

  Mutation: {
    signUpContractor: async (_, { userInput }, { dataSources }) => {
      const authInput = {
        dni: userInput.dni,
        username: userInput.username,
        password: userInput.password,
        name: userInput.name,
        lastname: userInput.lastname,
        age: userInput.age,
        email: userInput.email,
        telephone_number: userInput.telephone_number,
        city: userInput.city,
        address: userInput.address,
      };

      return await dataSources.authAPI.createContractor(authInput);
    },

    signUpSpecialist: async (_, { userInput }, { dataSources }) => {
      const authInput = {
        dni: userInput.dni,
        name: userInput.name,
        lastname: userInput.lastname,
        age: userInput.age,
        email: userInput.email,
        telephone_number: userInput.telephone_number,
        city: userInput.city,
        priceXhour: userInput.priceXhour,
        description: userInput.description,
        category: userInput.category,
        url: userInput.url,
        score: userInput.score,
      };

      return await dataSources.authAPI.createSpecialist(authInput);
    },
    //TODO: Fisnish mutation with MS1 and MS2
    // updateSpecialistScore: async (_, { specialistInput }, { dataSources }) => {
    //   const authInput = {
    //     score: specialistInput.score
    //   };

    //   return await dataSources.authAPI.updateSpecialistScore(specialistInput.id, authInput);
    // },

    logIn: (_, { credentials }, { dataSources }) =>
      dataSources.authAPI.authRequest(credentials),

    refreshToken: (_, { refresh }, { dataSources }) =>
      dataSources.authAPI.refreshToken(refresh),

    deleteContractorById: (_, { contractorId }, { dataSources }) =>
      dataSources.authAPI.deleteContractor(contractorId),

    deleteSpecialistById: (_, { specialistId }, { dataSources }) =>
      dataSources.authAPI.deleteSpecialist(specialistId),
  },
};

module.exports = usersResolver;
