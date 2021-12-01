const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AuthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.auth_api_url;
  }

  async authRequest(credentials) {
    credentials = new Object(JSON.parse(JSON.stringify(credentials)));
    return await this.post(`/login/`, credentials);
  }

  async refreshToken(token) {
    token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
    return await this.post(`/refresh/`, token);
  }

  async createContractor(contractor) {
    contractor = new Object(JSON.parse(JSON.stringify(contractor)));
    return await this.post(`/contractor/create`, contractor);
  }

  async getContractor(contractorId) {
    return await this.get(`/contractor/getSelected/${contractorId}`);
  }

  async deleteContractor(contractorId) {
    return await this.delete(`/contractor/deleteSelected/${contractorId}`);
  }

  async getAllContractor() {
    return await this.get(`/contractor/getAll`);
  }

  async createSpecialist(specialist) {
    specialist = new Object(JSON.parse(JSON.stringify(specialist)));
    return await this.post(`/specialist/create`, specialist);
  }

  async getSpecialist(specialistId) {
    return await this.get(`/specialist/getSelected/${specialistId}`);
  }

  async deleteSpecialist(specialistId) {
    return await this.delete(`/specialist/deleteSelected/${specialistId}`);
  }

  async getAllSpecialist() {
    return await this.get(`/specialist/getAll`);
  }

  async filterSpecialist(category) {
    return await this.get(`/specialist/viewbycategory/${category}`);
  }
}

module.exports = AuthAPI;
