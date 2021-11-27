const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId === userIdToken)
                return dataSources.authAPI.getContractor(userId)
            else
                return null
        },
    },

    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const authInput = {
                dni: userInput.dni,
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                lastname: userInput.lastname,
                age: userInput.age,
                email: userInput.email,
                telephoneNumber: userInput.telephoneNumber,
                city: userInput.city,
                address: userInput.address
            }

            return await dataSources.authAPI.createContractor(authInput)
        },

        logIn: (_, { credentials }, { dataSources }) => dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) => dataSources.authAPI.refreshToken(refresh)
    }
}

module.exports = usersResolver