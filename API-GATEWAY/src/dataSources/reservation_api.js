const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class ReservationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.reservation_api_url;
  }

  async createReserve(reserve) {
    reserve = new Object(JSON.parse(JSON.stringify(reserve)));
    return await this.post(`/reservationController/addReservation`, reserve);
  }

  async getAllReservations() {
    return await this.get(`/reservationController/getAllReservations`);
  }

  async getReservationsByContractor(contractorId) {
    return await this.get(`/reservationController/getReservationsByContractor/${contractorId}`);
  }

  async deleteReserve(reserveId) {
    return await this.delete(`/reservationController/deleteReservationById/${reserveId}`);
  }

  async updateReserve(reserve) {
    reserve = new Object(JSON.parse(JSON.stringify(reserve)));
    return await this.put(`/reservationController/updateReservation`, reserve);
  }

  async getReservesBySpecialist(specialistId) {
    return await this.get(`/reservationController/getReservationsBySpecialist/${specialistId}`);
  }

  async getSpecialistScore(specialistId) {
    return await this.get(`/reservationController/getScoreBySpecialist/${specialistId}`);
  }

  async getArrayWithReserveTime() {
    return await this.get(`/reservationController/getTimeByService`);
  }

  async getReserveById(reserveId) {
    return await this.get(`/reservationController/getReservationById/${reserveId}`);
  }
}

module.exports = ReservationAPI;
