const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class ReservationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.reservation_api_url;
  }

  async getAllReservations() {
    return await this.get(`/reservationController/getAllReservations`);
  }

  async getReservationsByContractor(contractorId) {
    return await this.get(
      `/reservationController/getReservationsByContractor/${contractorId}`
    );
  }
}

module.exports = ReservationAPI;
