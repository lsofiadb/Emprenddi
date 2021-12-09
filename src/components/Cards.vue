<template>
<div>
  <div v-for="(specialist) in getAllSpecialist" :key="specialist.id" :specialist="specialist">
    <div class="card" style="width: 18rem">
      <img src="../assets/user.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Nombre Completo: {{specialist.name}}</h5>
        <p class="card-text">Descripcion de la solucion</p>
        <div class="d-flex justify-content-center">
          <router-link to="/user/Information" class="btn btn-primary"
            >ver mas</router-link
          >
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Cards",
  
  data: function () {
    return {
     getAllSpecialist: [],
      items: "",
       id: 0,
        dni: 0,
        name:"",
        lastname:"",
        age: 0,
        email: "",
        telephone_number:0,
        city: "",
        priceXhour: 0,
        description: "",
        category: "",
        url: "",
        score:0,
    };
},
apollo: {
    getAllSpecialist: {
      query: gql`
        query  {
            getAllSpecialist {
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
          
        };
      },
    },
  },
  created: function () {
    this.$apollo.queries.getAllSpecialist.refetch();
  }
};  
</script>

<style>
.card-title {
  text-align: center;
  color: black;
}
.card-text {
  color: black;
}
</style>