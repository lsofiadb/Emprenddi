const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const AuthAPI = require("./dataSources/auth_api");
const ReservationAPI = require("./dataSources/reservation_api");
const authentication = require("./utils/authentication");

const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI(),
    reservationAPI: new ReservationAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
