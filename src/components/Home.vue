<template>
  <div>
    <main>
      <section id="banner">
        <!-- <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/emprender.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/emprender1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/emprender2.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
                </button>
            </div> -->
        <img src="../assets/emprender2.jpg" />
        <div class="contenedor">
          <h1>
            ¡Bienvenido
            <span>{{ getContractorById.name }}</span
            >!
          </h1>

          <h2>Las mas rapidas soluciones a tu necesidad</h2>
        </div>
        <div class="Lista-desplegable">
          <form>
            <select name="Categorias">
              <option>Django</option>
              <option>Laravel</option>
              <option>Javascript</option>
              <option>Java</option>
              <option>Spring</option>
            </select>
          </form>
        </div>
        <button type="submit" class="btn-reservar right">Reservar</button>
      </section>
    </main>
    <section id="Bienvenidos">
      <h2>Encuentra y contacta gratis con profesionales particulares</h2>
    </section>

    <section>
      <cards />
    </section>
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
<style>
section {
  width: 100%;
  margin-bottom: 25px;
}
#banner {
  position: relative;
}
#banner img {
  width: 100%;
  height: 100%;
}
#banner .contenedor {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
#banner h2 {
  font-size: 28px;
}
#banner .Lista-desplegable {
  position: absolute;
  top: 80%;
  left: 40%;
  transform: translateX(-50%) translateY(-50%);
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
#banner .btn-reservar {
  position: absolute;
  top: 80%;
  left: 60%;
  transform: translateX(-50%) translateY(-50%);
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 100px;
  text-align: center;
}

@media (min-width: 480px) {
  #banner h2 {
    font-size: 40px;
  }
}
@media (min-width: 768px) {
  #banner {
    height: 300px;
    overflow: hidden;
  }
  #banner img {
    height: auto;
    margin-top: -100px;
  }
}
@media (min-width: 1024px) {
  #banner img {
    margin-top: -400px;
  }
}

#Bienvenidos {
  text-align: center;
  padding-top: 50px;
  color: black;
}

@media (min-width: 1024px) {
  .contenedor {
    width: 1500px;
  }
}
</style>