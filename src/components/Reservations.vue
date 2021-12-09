<template>
  <div class="container table-responsive">

    <table id="cart" class="table table-hover table-sm">
        <tr>
          <th style="width:30%">ID Reserva</th>
          <th style="width:30%">Especialista</th>
          <th style="width:15%">Fecha Inicial</th>
          <th style="width:15%">Fecha Final</th>
          <th style="width:10%">Score</th>
        </tr>

        <tr v-for="ReservationsDetail in getReservationsByContractor" :key="ReservationsDetail.id"
        class="d-table-row d-sm-none">
          <td>{{ ReservationsDetail.id }}</td>
          <td>{{ ReservationsDetail.contractorId }}</td>
          <td>{{ ReservationsDetail.specialistId }}</td>
          <td>{{ ReservationsDetail.initialDate }}</td>
          <td>{{ ReservationsDetail.finalDate }}</td>
          <td>${{ ReservationsDetail.score }}</td>
        </tr>
        <!--
        <tr>
          <td>
            <button class="btn btn-success">
              <i class="fa fa-angle"></i> Editar 
            </button>
          </td>
          <td class="px-0">
            <button class="btn btn-info">
              <span class="text-nowrap"
                >Eliminar <i class="fa fa-angle d-inline"></i
              ></span>
            </button>
          </td>
        </tr>
        -->
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
 name: "Reservation",

  data: function () {
    contractorId2: jwt_decode(localStorage.getItem("token_refresh")).contractor_id,
    console.log(this.contractorId2)
    return {
      contractorId2: jwt_decode(localStorage.getItem("token_refresh")).contractor_id,
      username: localStorage.getItem("username") || "none",
      getReservationsByContractor: [],
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
          contractorId: this.contractorId,
        };
      },
    },
  },

  created: function () {
    this.$apollo.queries.getReservationsByContractor.refetch();
  }

}
</script>

<style>
.myReser {
  padding: 50px;
  background-color: #ffffff;
}
</style>