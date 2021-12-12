<template>
<div>
  <div v-for="specialist in getAllSpecialist" :key="specialist.id">
    <div class="card m-3">
      <img v-bind:src="specialist.url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Nombre: &nbsp;<span>{{specialist.name}} {{specialist.lastname}}</span></h5>
        <h5 class="card-title">Edad: &nbsp;<span>{{specialist.age}}</span></h5>
        <h5 class="card-title">Email: &nbsp;<span>{{specialist.email}}</span></h5>
        <h5 class="card-title">Ciudad: &nbsp;<span>{{specialist.city}}</span></h5>
        <div class="d-flex justify-content-center mt-4">
          <router-link :to="{name: 'information', params:{specialistId:specialist.id}}" class="btn">ver mas</router-link>
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
  font-size: 18px;
}

.card-text {
  color: black;
}

.card-body h5 {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.card-body {
  background: #ecf0f1;
}

.card-body span {
  font-weight: 400;
}

.card {
  width: 350px;
  box-shadow: 0px 0px 20px 0px #333333;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 400px;
}

.card a {
  background: #34495e;
  color: #ffffff;
}

.card a:hover {
  background: #333333;
  color: #ffffff;
}
</style>