<template>
  <div class="myReser">
    <div class="container table-responsive my-5">
      <table id="myReserTable" class="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha Inicial</th>
            <th>Fecha Final</th>
            <th style="display: none;">Especialista</th>
            <th>Score</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="reservation in getReservationsByContractor" :key="reservation.id">
              <td class="myTd">{{reservation.id}}</td>
              <td class="myTd">{{moment(reservation.initialDate).format(moment.HTML5_FMT.DATE)}}&nbsp;&nbsp;&nbsp;&nbsp;{{moment(reservation.initialDate).format(moment.HTML5_FMT.TIME_SECONDS)}}</td>
              <td class="myTd">{{moment(reservation.finalDate).format(moment.HTML5_FMT.DATE)}}&nbsp;&nbsp;&nbsp;&nbsp;{{moment(reservation.finalDate).format(moment.HTML5_FMT.TIME_SECONDS)}}</td>
              <td style="display: none;" class="myTd">{{reservation.specialistId }}</td>
              <td class="myTd">{{reservation.score }}</td>
              <td class="myTd">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-pencil-alt"></i> Editar</button>
                &nbsp;
                <button type="button" class="btn btn-danger" @click="cancelReservation(reservation.id)"><i class="fas fa-trash-alt"></i> Eliminar</button>
              </td>
            </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog w-25">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title" id="staticBackdropLabel">Actualizar Reserva</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <!-- FORM -->          
              <form v-on:submit.prevent="">
                <div class="col-12">
                  <div class="form-group mb-3">
                    <label class="font-weight-bold">
                      Fecha Inicial 
                      <span class="text-danger">*</span>
                    </label>
                    <Datepicker :is24="false" />
                  </div>

                  <div class="form-group mb-3">
                    <label class="font-weight-bold">
                      Fecha Final 
                      <span class="text-danger">*</span>
                    </label>
                    <Datepicker :is24="false" />
                  </div>

                  <div class="form-group mb-3">
                    <label class="font-weight-bold">
                      Score
                      <span class="text-danger">*</span>
                    </label>
                    <input id="score" type="number" class="form-control" placeholder="score">
                  </div>

                  <div class="d-flex mt-4">
                    <button class="btn btn-success" @click="createReservation()" type="button">
                      <i class="bi-cart-fill me-1"></i>
                      Guardar reserva
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </form>
              <!-- FIN FORM -->
            </div>
          </div>
        </div>
      </div>
      <!-- Fin Modal -->

    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
import moment from 'moment';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

export default {
  name: "Reservation",
  components: {
    Datepicker
  },
  data: function () {
    return {
      getReservationsByContractor: [],
      contractorIdJWT: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      username: localStorage.getItem("username") || "none",
      getSpecialistById: {},
      specialistId2: 2,
      moment,
    };
  },
  apollo: {
    getReservationsByContractor: {
      query: gql`
        query ($contractorId: Int!) {
          getReservationsByContractor(contractorId: $contractorId) {
            id
            contractorId
            specialistId
            initialDate
            finalDate
            score
          }
        }
      `,
      variables() {
        return {
          contractorId: this.contractorIdJWT,
        };
      }
    },
    getSpecialistById: {
      query: gql`
        query GetSpecialistById($specialistId: Int!) {
          getSpecialistById(specialistId: $specialistId) {
            id
            dni
            name
            lastname
            age
            email
            telephone_number
            city
            priceXhour
            description
            category
            url
            score
        }
      }
      `,
      variables() {
        return {
          specialistId: this.specialistId2,
        };
      },
    
    },
  },
  methods: {
    cancelReservation(reserveId) {
      this.$apollo.mutate({
          mutation: gql`
            mutation Mutation($reserveId: Int!) {
            deleteReserve(reserveId: $reserveId)
          }
          `,
          variables: {
            reserveId: reserveId,
          },
      })
    },
  },
  created: function () {
    this.$apollo.queries.getReservationsByContractor.refetch();
  },
};
</script>

<style>
.myReser {
  padding: 50px;
  background-color: #ffffff;
}

thead {
  background-color: #6C7A8A;
  color: #ffffff;
}

thead th {
  text-align: center;
}

table {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 1px #000000;
}

.myTd {
  vertical-align: middle;
  text-align: center;
}
</style>