<template>
  <div class="myHome">
    <div class="myHeader">
      <div>
        <h1>Las más rápidas soluciones a tu necesidad</h1>
        <section>
          <div>
            <select name="" id="mySelect">
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
      <div class="myCards">
        <cards />
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
import Cards from "./Cards.vue";

export default {
  name: "Home",
  components: {
    Cards
  },
  data: function () {
    return {
      contractorId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      getContractorById: {
        username: "",
        name: "",
        email: "",
      },
    };
  },

  apollo: {
    getContractorById: {
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
};
</script>
<style scoped>
.myHome {
  color: #47525E;
  background: #6c7a8a;
}

.myHeader {
  background: #E5E9F2;
  display: flex;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 100px;
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

.myHeader div section div #mySelect {
  width: 250px;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  color: #47525E;
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
  padding-right: 90px;
  padding-left: 90px;
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
  color: #ffffff;
}

.myCards {
  background: #6c7a8a;
}

.myCards div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>