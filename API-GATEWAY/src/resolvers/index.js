const authResolver = require('./auth_resolver');
const reservationResolver = require('./reservation_resolver.js');
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver, reservationResolver);

module.exports = resolvers;