<template>
  <div class="modal-dialog text-center">
    <div class="col-sm-8 main-section">
      <div class="modal-content">
        <div class="col-12 user-img">
          <img src="../assets/user.png" />
        </div>
        <!--<form class="col-12" th:action="@{/login}" method="get">-->
        <form class="col-12" v-on:submit.prevent="processLogInUser">
          <div class="form-group" id="user-group">
            <input
              type="text"
              class="form-control" v-model="user.username"
              placeholder="Nombre de usuario"
              name="username"
            />
          </div>
          <div class="form-group" id="contrasena-group">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              class="form-control" v-model="user.password"
              placeholder="Contraseña"
              name="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            <i class="fas fa-sign-in-alt"></i> Ingresar
          </button>
        </form>
        <div class="col-12 forgot">
          <router-link to="/user/signUp" class="nav-link active"
            >No tienes una cuenta registrate aqui</router-link
          >
        </div>
        <div th:if="${param.error}" class="alert alert-danger" role="alert">
          Contraseña invalida.
        </div>
        <div th:if="${param.logout}" class="alert alert-success" role="alert">
          Ha cerrado sesion.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "LogIn",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    processLogInUser: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            credentials: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },

};
</script>

<style>
body {
  background-size: cover;
}

.main-section {
  margin: 0 auto;
  margin-top: 25%;
  padding: 0;
}

.modal-content {
  background-color: #3b4652;
  opacity: 0.85;
  padding: 0 20px;
  box-shadow: 0px 0px 3px #848484;
}
.user-img {
  margin-top: -50px;
  margin-bottom: 35px;
}

.user-img img {
  width: 100xp;
  height: 100px;
  box-shadow: 0px 0px 3px #848484;
  border-radius: 50%;
}

.form-group input {
  height: 42px;
  font-size: 18px;
  border: 0;
  padding-left: 54px;
  border-radius: 5px;
}

.form-group::before {
  font-family: "Font Awesome\ 5 Free";
  position: absolute;
  left: 28px;
  font-size: 22px;
  padding-top: 4px;
}

.form-group#user-group::before {
  content: "\f007";
}

.form-group#contrasena-group {
  margin-bottom: 10px;
}

.form-group#contrasena-group i {
  position: relative;
  left: -127px;
  top: 37px;
  font-size: 20px;
}

button {
  width: 60%;
  margin: 5px 0 25px;
}

.forgot {
  padding: 5px 0;
}

.forgot a {
  color: white;
}
</style>
