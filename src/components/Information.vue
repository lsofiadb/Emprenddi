<template>
 <section class="myInformation py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" src="../assets/user.png" alt="..."/>
        </div>
        <div class="col-md-6">
          <h2 class="display-5 fw-bolder text-dark">Nombre del Profesional</h2>
          <div class="fs-5 mb-5">
          </div>
          
          <!-- FORM -->          
          <form v-on:submit.prevent="">
            <div class="col-6">
              <div class="form-group mb-3">
                <label class="font-weight-bold">
                  Fecha Inicial 
                  <span class="text-danger">*</span>
                </label>
                <Datepicker v-model="myDates.initialDate" :is24="false" />
              </div>

              <div class="form-group mb-3">
                <label class="font-weight-bold">
                  Fecha Final 
                  <span class="text-danger">*</span>
                </label>
                <Datepicker v-model="myDates.finalDate" :is24="false" />
              </div>

              <div class="d-flex">
                <button class="btn btn-outline-dark flex-shrink-0" @click="createReservation()" type="button">
                  <i class="bi-cart-fill me-1"></i>
                  Agendar Cita
                </button>
              </div>
            </div>
          </form>
          <!-- FIN FORM -->

        </div>
      </div>
    </div>
  </section>   
</template>
<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
    name: "Information",
    components: {
      Datepicker
    },
    data: function () {
      return {
        contractorId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
        specialistId: parseInt(this.$route.path.split('/')[3]),
        myDates: {
          initialDate: '',
          finalDate: '',
        },
      }
    },    
    methods: {
      createReservation() {
        this.$apollo.mutate({
          mutation: gql`
            mutation ($reserveInput: Reservation) {
              createReserve(reserveInput: $reserveInput) {
                id
                contractorId
                specialistId
                initialDate
                finalDate
                score
              }
            }`,
          variables: {
            reserveInput: {
              contractorId: this.contractorId,
              specialistId: this.specialistId,
              initialDate: this.myDates.initialDate,
              finalDate: this.myDates.finalDate,
              score: 0.0
            }
          },
        })
      },
    },
}
</script>
<style>
.myInformation {
  background-color: #ffffff;
}
</style>
