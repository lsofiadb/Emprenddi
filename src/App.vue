<template>
<div>
<header>
     <nav class="myNav navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <router-link to="/user/Home"><img src="./assets/logo_nb.jpg" alt=""></router-link>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/user/Home" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/user/logIn" class="nav-link text-white">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/user/Reservations" class="nav-link text-white">Reservations</router-link>
                    </li>
                </ul>
                
            </div>
        </div>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
     </nav>

    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
  </header>
    <footer class="text-center text-white">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.5)">
        © 2021 Copyright:
        <a class="text-white" href="https://www.misiontic2022.gov.co/portal/"
          >MisiónTic2022</a>
      </div>
      <!-- Copyright -->
    </footer>
</div>
</template>

<script>
export default {
  name: "App",

  computed: {
      is_auth: {
        get: function() {
          return this.$route.meta.requiresAuth;
        },
        set: function() { }
      }
  },

  methods:{

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
      console.log("Paso Filtro 3")
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.loadHome();
      console.log("Paso Filtro 4")
    },

    completedSignUp: function(data) {
      console.log("Paso Filtro 2")
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },
    
    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.loadLogIn();
		},
  }  

};
</script>

<style>
.myNav {
  background-color: #2d3436;
}
.text-center{
  background-color: #2d3436;
}

</style>
