<template>
  <section class="contact-box">
    <div class="myRegister bg-dark">
      <div class="myBox text-center">
        <img src="../assets/logo-emprenddi.png" alt="logo" />
      </div>

      <div>
        <div class="container align-self-center p-6">

          <h1 class="font-weight-bold mb-3 text-center">Crea tu cuenta gratis</h1>
          <p class="text-muted mb-5 text-center">
            Ingresa la siguiente información para registrarte.
          </p>

          <form v-on:submit.prevent="processSignUp">            
            <div class="row">
              <div class="col-6">
                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Cedula 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="number" class="form-control" v-model="user.dni" placeholder="Tu numero de identificacion"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Username 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="user.username" placeholder="Tu nombre de usuario"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Contraseña 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="password" class="form-control" v-model="user.password" placeholder="Tu contraseña"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Nombre 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="user.name" placeholder="Tu nombre"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Apellido 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="user.lastname" placeholder="Tu apellido"/>
                </div>
              </div>

              <div class="col">
                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Edad 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="number" class="form-control" v-model="user.age" placeholder="Tu edad"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Correo electrónico 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="email" class="form-control" v-model="user.email" placeholder="Ingresa tu correo electrónico"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Numero Telefónico 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="number" class="form-control" v-model="user.telephone_number" placeholder="Tu numero de teléfono"/>
                </div>

                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Ciudad 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="user.city" placeholder="Tu ciudad"/>
                </div>
                
                <div class="form-group mb-3">
                  <label class="font-weight-bold">
                    Dirección 
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" v-model="user.address" placeholder="Tu dirección"/>
                </div>
              </div>

            <br/>

            <div class="form-group mb-5">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label text-muted">
                  Al seleccionar esta casilla aceptas nuestro aviso de
                  privacidad y los términos y condiciones
                </label>
              </div>
            </div>

            <div class="d-flex">
              <button class="btn btn-primary" type="submit">
                <router-link to="/user/logIn" class="nav-link text-white">Volver</router-link>
              </button>
              <button class="btn btn-success" type="submit">
                Regístrate
              </button>
            </div>
            
            </div>
          </form>

          <small class="d-inline-block text-muted mt-5">Todos los derechos reservados | © 2021 Emprenddi</small>

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
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpContractor.access,
            token_refresh: result.data.signUpContractor.refresh,
          };
          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          toastr.error('Fallo en el registro','Oops..', {timeOut: 1000, positionClass: 'toast-top-right'});
        });
    },
  },
};
</script>
<style scoped>
.contact-box {
  margin: 0 auto;
  width: 100vw;
  background: #ffeaa7;
  background: -webkit-linear-gradient(to right, #ffffff, #ffeaa7);
  background: linear-gradient(to right, #ffffff, #ffeaa7);
  position: absolute;
}

.myRegister {
  color: #ffffff;
  margin: 50px auto;
  padding: 50px;
  width: 700px;
  border-radius: 10px;
  background-color: #3b4652!important;
  box-shadow: 0px 0px 5px 0px #333333;
}

.text-muted {
  color: #d4d3d3!important;
}

.myBox {
  border-radius: 50%;
  background: #34495e;
  border: 2px solid #ffffff;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.myBox img {
  width: 75%;
  margin-bottom: 10px;
}

button {
  margin: 0 auto;
  width: 200px;
}

small {
  position: relative;
  transform: translate(-50%);
  left: 50%;
}
</style>
