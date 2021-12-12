<template>
  <div class="all">
    <div class="main-section">
      <div class="modal-content">
        <div class="user-img">
          <img src="../assets/user.png" />
        </div>
        <!--<form class="col-12" th:action="@{/login}" method="get">-->
        <form class="" v-on:submit.prevent="processLogInUser" autocomplete="off">
          <div class="form-group" id="user-group">
            <div>
              <i class="fas fa-user"></i>
            </div>
            <input
              id="myUser"
              type="text"
              class="form-control" v-model="user.username"
              placeholder="Nombre de usuario"
              name="username"
            />
          </div>
          <div class="form-group">
            <div>
              <i class="fas fa-lock"></i>
            </div>
            <input
              id="myPass"
              type="password"
              class="form-control" v-model="user.password"
              placeholder="Contraseña"
              name="password"
            />
          </div>
          <button type="submit" class="btn">
            <i class="fas fa-sign-in-alt"></i> Ingresar
          </button>
        </form>
        <div class="col-12 forgot">
          <router-link to="/user/signUp" class="nav-link active"
            >No tienes una cuenta registrate aqui</router-link
          >
        </div>
        <div th:if="${param.error}" v-if="msgWrongPass" class="alert alert-danger" role="alert">
          Credenciales incorrectas.
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
      msgWrongPass: false
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
          this.msgWrongPass = true;
          $('#myUser').focus();
          setTimeout(() => {
            this.msgWrongPass = false;
          }, 1500);
        });
    },
  },

};
</script>

<style scoped>
.all {
  position: absolute;
  background-image: url('../assets/background.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.main-section {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  text-align: center;
}

.modal-content {
  background-color: rgba(255, 234, 167, .7);
  padding: 0 56px;
  width: 385px;
  box-shadow: 0px 0px 5px 1px #333333;
  border-radius: 20px;
}

.user-img {
  margin-top: -50px;
  margin-bottom: 35px;
}

.user-img img {
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 3px #848484;
  border-radius: 50%;
}

.form-group input {
  height: 42px;
  font-size: 18px;
  border: 0;
  padding: 25px;
  padding-left: 60px;
  border-radius: 5px;
  color: #34495e;
  font-weight: bold;
  margin-bottom: 25px;
  background-color: #ffffff;
}

.form-group div {
  background: #34495e;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #ffffff;
}

button {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #34495e;
  color: #ffffff;
}

button:hover {
  color: #ffffff;
  background: #333333;
}

.forgot {
  padding: 5px 0;
}

.forgot a {
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: #34495e;
}

.forgot a:hover {
  color: #333333;
}
</style>
