//Se llama al typedef (esquema) de cada submodulo
const authTypeDefs = require('./auth_type_defs');
// const reservationTypeDefs = require('./reservation_type_defs');
//Se unen
const schemasArrays = [authTypeDefs/*, reservationTypeDefs*/];
//Se exportan
module.exports = schemasArrays;