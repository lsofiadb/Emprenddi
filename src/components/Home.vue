<template>
  <div class="myHome">
    <div class="myHeader">
      <div>
        <h1>Las más rápidas soluciones a tu necesidad</h1>
        <section>
          <div>
            <select name="" id="">
              <option value="">One</option>
              <option value="">Two</option>
              <option value="">Three</option>
            </select>
            <a>Buscar</a>
          </div>
          <span>No te desanimes, encontraremos alguien capaz de resolver tu problema</span>
        </section>
      </div>
    </div>

    <div class="myBody">
      <h2>Encuentra y contacta gratis con profesionales particulares</h2>
      <cards />
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
import Cards from "./Cards.vue";

export default {
  name: "Home",

  data: function () {
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      getContractorById: {
        username: "",
        name: "",
        email: "",
      },
    };
  },

  apollo: {
    userDetailById: {
      query: gql`
        query ($contractorId: Int!) {
          getContractorById(contractorId: $contractorId) {
            username
            name
            email
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

  //components: {
  //    Cards
  //}
};
</script>
<style scoped>
.myHome {
  color: #333333;
  background: #ffffff;
}

.myHeader {
  background: #E5E9F2;
  display: flex;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 125px;
}

.myHeader a {
  text-decoration: none;
  font-weight: bold;
}

.myHeader a:hover {
  background: #333333;
  transition: all .3s ease;
}

.myHeader div {
  text-align: center;
  width: 650px;
}

.myHeader div h1 {
  font-weight: bold;
  margin-bottom: 75px;
}

.myHeader div span {
  display: block;
  margin-top: 75px;
  font-size: 18px!important;
}

.myHeader div section div {
  display: flex;
  justify-content: space-around;
}

.myHeader div section span {
  font-size: 15px;
}

.myHeader div section div select {
  width: 250px;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
}

.myHeader div section div a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  background: #47525E;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px;
  height: 50px;
  cursor: pointer;
}

.myHeader div section div a:hover {
  color: #ffffff;
}

.myBody {
  padding-bottom: 90px;
}

.myBody h2 {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 90px;
  font-size: 24px;
  font-weight: bold;
}
</style>