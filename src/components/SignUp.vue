<template>
  <section class="contact-box">
    <div class="row no-gutters bg-dark">
      <div class="myBox">
        <img src="../assets/logo_emprenddi.jpg" alt="logo" />
      </div>
      <div class="position-absolute testiomonial p-4">
        <h3 class="font-weight-bold text-light"></h3>
        <p class="lead text-light"></p>
      </div>
      <div class="col-xl-7 col-lg-12 d-flex">
        <div class="container align-self-center p-6">
          <h1 class="font-weight-bold mb-3">Crea tu cuenta gratis</h1>
          <p class="text-muted mb-5">
            Ingresa la siguiente información para registrarte.
          </p>

          <form v-on:submit.prevent="processSignUp">
            <div class="form-row mb-2">
              <div class="form-group col-md-8">
                <label class="font-weight-bold"
                  >Cedula <span class="text-danger">*</span></label
                >
                <input
                  type="number"
                  class="form-control"
                  v-model="user.dni"
                  placeholder="Tu numero de identificacion"
                />
              </div>
              <div class="form-group col-md-8">
                <label class="font-weight-bold"
                  >Username <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="user.username"
                  placeholder="Tu nombre de usuario"
                />
              </div>
              <div class="form-group col-md-8">
                <label class="font-weight-bold"
                  >Contraseña <span class="text-danger">*</span></label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  placeholder="Tu contraseña"
                />
              </div>
              <div class="form-group col-md-8">
                <label class="font-weight-bold"
                  >Nombre <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="user.name"
                  placeholder="Tu nombre"
                />
              </div>
              <div class="form-group col-md-8">
                <label class="font-weight-bold"
                  >Apellido <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="user.lastname"
                  placeholder="Tu apellido"
                />
              </div>
              <div class="form-group col-md-8">
                <label class="font-weight-bold"
                  >Edad <span class="text-danger">*</span></label
                >
                <input
                  type="number"
                  class="form-control"
                  v-model="user.age"
                  placeholder="Tu edad"
                />
              </div>
            </div>
            <div class="form-group col-md-8">
              <label class="font-weight-bold"
                >Correo electrónico <span class="text-danger">*</span></label
              >
              <input
                type="email"
                class="form-control"
                v-model="user.email"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div class="form-group col-md-8">
              <label class="font-weight-bold"
                >Numero Telefónico <span class="text-danger">*</span></label
              >
              <input
                type="number"
                class="form-control"
                v-model="user.telephone_number"
                placeholder="Tu numero de teléfono"
              />
            </div>

            <div class="form-group col-md-8">
              <label class="font-weight-bold"
                >Ciudad <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="user.city"
                placeholder="Tu ciudad"
              />
            </div>
            <div class="form-group col-md-8">
              <label class="font-weight-bold"
                >Dirección <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="user.address"
                placeholder="Tu dirección"
              />
            </div>
            <br />
            <div class="form-group mb-5">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label text-muted"
                  >Al seleccionar esta casilla aceptas nuestro aviso de
                  privacidad y los términos y condiciones</label
                >
              </div>
            </div>
            <button class="btn btn-primary width-100" type="submit">
              Regístrate
            </button>
          </form>
          <small class="d-inline-block text-muted mt-5"
            >Todos los derechos reservados | © 2021 Templune</small
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import gql from "graphql-tag";

export default {
  name: "SignUp",

  data: function () {
    return {
      user: {
        dni: 0,
        username: "",
        password: "",
        name: "",
        lastname: "",
        email: "",
        age: 0,
        email: "",
        telephone_number: 0,
        city: "",
        address: "",
      },
    };
  },

  methods: {
    processSignUp: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($userInput: SignUpInputContractor) {
              signUpContractor(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
            console.log(this.user.username)
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpContractor.access,
            token_refresh: result.data.signUpContractor.refresh,
          };
            console.log("Paso Filtro 1")
          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>
<style>
:root {
  --color-dark: #15181f;
  --color-dark-x: #2d343f;
  --color-dark-xx: #1f232b;
  --color-light: #ffffff;
  --color-grey: #f5f6f8;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  background-color: var(--color-grey);
  color: var(--color-light);
  letter-spacing: 0.05rem;
}

.bg-light {
  background-color: var(--color-light) !important;
}

.bg-dark {
  background-color: var(--color-dark) !important;
}

.p-6 {
  padding: 4rem 7rem;
}

.contact-box {
  padding: 3rem;
}

.btn {
  font-weight: 400;
  padding: 1rem 2rem;
  border-radius: 5rem;
  min-width: 10rem;
  width: 50px;
}

.btn-outline-dark {
  border: 2px solid var(--color-dark-xx);
}

.form-control {
  background-color: var(--color-dark-xx);
  border: 2px solid var(--color-dark-xx);
  border-radius: 0.2rem;
  padding: 1.5rem 1rem;
}

.myBox {
  background-color: #ffffff;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  margin-left: 75px;
}

.myBox img {
  width: 70%;
  height: 70%;
}

.testiomonial {
  bottom: 10px;
}

@media (max-width: 575.98px) {
  .p-6 {
    padding: 2rem;
  }

  .contact-box {
    padding: 0;
  }

  .width-100 {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .register-bg {
    min-height: 50vh;
  }
}
</style>
