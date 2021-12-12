<template>
 <section class="myInformation py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="imgContainer col-md-6">
          <img class="card-img-top mb-5 mb-md-0" v-bind:src="getSpecialistById.url" alt="..."/>
        </div>
        <div class="col-md-6">
          <h2 class="display-5 fw-bolder text-dark text-center"><u>{{getSpecialistById.name}} {{getSpecialistById.lastname}}</u></h2>
          <div class="fs-5 mb-5">
          </div>
          
          <!-- FORM -->          
          <form v-on:submit.prevent="">
            <div class="myColumn col-6">
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

              <div class="btnBox d-flex">
                <button class="myBtn btn btn-outline-dark flex-shrink-0" @click="createReservation()" type="button">
                  <i class="fas fa-clipboard-check"></i>
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
        getSpecialistById: {
          username: "",
          url: "",
        }
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
        toastr.success('Tu reserva quedo registrada', {timeOut: 1000});
      },
    },
    apollo: {
    getSpecialistById: {
      query: gql`
        query Query($specialistId: Int!) {
        getSpecialistById(specialistId: $specialistId) {
          name
          lastname
          url
          score
        }
      }
      `,
      variables() {
        return {
          specialistId: this.specialistId,

        };
      },
    },
  },
  // created: function () {
  //   console.log(this.getSpecialistById)
  // },
}
</script>
<style scoped>
.myInformation {
  background-color: #ffffff;
}

.imgContainer, .btnBox, form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.myInformation img {
  width: 350px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px #333333;
}

h2 {
  color: #34495e;
}

.dp__input_icon_pad {
  border: 1px solid #333333;
}

.myColumn {
  border: 2px dashed #000000;
  padding: 20px;
  width: 300px;
  box-shadow: 0px 0px 10px 0px #333333;
}

.myBtn {
  color: #ffffff;
  background: #34495e;
  font-size: 25px;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
