<template>
  <div class="myReser">
    <div class="container table-responsive my-5">
      <table id="myReserTable" class="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha Inicial</th>
            <th>Fecha Final</th>
            <th>Score</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="reservation in getReservationsByContractor" :key="reservation.id">
              <td class="myTd">{{reservation.id}}</td>
              <td class="myTd">{{reservation.initialDate}}</td>
              <td class="myTd">{{reservation.finalDate}}</td>
              <td class="myTd">{{reservation.score }}</td>
              <td>
                <a class="btn btn-primary" href="#"><i class="fas fa-pencil-alt"></i> Editar</a>
                &nbsp;
                <a class="btn btn-danger" href="#" @click="cancelReservation(reservation.id)"><i class="fas fa-trash-alt"></i> Eliminar</a>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
 name: "Reservation",
 data: function () {
    return {
      getReservationsByContractor: [],
      contractorIdJWT: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      username: localStorage.getItem("username") || "none",
      getSpecialistById: {},
      specialistId2:2
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
      console.log(`Delete contact: ${reserveId}`)
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
        // location.reload();
    },
  },
  created: function () {
    this.$apollo.queries.getReservationsByContractor.refetch();
    this.$apollo.queries.getSpecialistById.refetch();
  }
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