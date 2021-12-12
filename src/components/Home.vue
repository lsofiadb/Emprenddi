<template>
  <div class="myHome">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div data-bs-interval="2000" class="carousel-item active">
          <img src="../assets/img-1.jpg" class="d-block" alt="...">
        </div>
        <div data-bs-interval="2000" class="carousel-item">
          <img src="../assets/img-2.jpg" class="d-block" alt="...">
        </div>
        <div data-bs-interval="2000" class="carousel-item">
          <img src="../assets/img-3.jpg" class="d-block" alt="...">
        </div>
        <div data-bs-interval="2000" class="carousel-item">
          <img src="../assets/img-4.jpg" class="d-block" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="myHeader">
      <div class="encima">
        <h1>Las más rápidas soluciones a tu necesidad</h1>
        <section>
          <div>
            <select name="" id="mySelect">
              <option value="">Carpintero</option>
              <option value="">Pintor</option>
              <option value="">Desarrollador</option>
              <option value="">Electricista</option>
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
  color: #34495e;
  background: #dfe6e9;
}

#carouselExampleFade {
  position: absolute;
  width:  100vw;
  margin: 0 auto;
  transform: translateX(-50%);
  left: 50%;
  top: 95px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px #333333;
  height: 500px;
}

#carouselExampleFade img {
  width: 100%;
  position: relative;
  top: -110px;
}

.encima {
  z-index: 10;
  background: rgba(0, 0, 0, .5);
  border-radius: 20px;
  height: 435px;
  padding-top: 80px;
  color: #ffffff;
  position: relative;
  top: -35px;
}

.myHeader {
  background: #ffeaa7;
  display: flex;
  justify-content: center;
  padding-top: 75px;
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
  font-size: 19px!important;
  color: #ffffff;
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
  background: #ffeaa7;
  color: #34495e;
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
  font-size: 25px;
  font-weight: bolder;
  color: #34495e;
}

.myCards {
  background: #dfe6e9;
}

.myCards div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>