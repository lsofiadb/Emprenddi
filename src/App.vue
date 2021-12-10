<template>
<div>
    <header>
     <nav v-if="is_auth" class="myNav navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse" id="navbarTogglerDemo01">
            <router-link class="logo" to="/user/Home">
              <div>
                <img src="./assets/logo-emprenddi.png" alt="Logo Emprenddi">
              </div>
              <span class="mySpanOne">Emprenddi</span>
            </router-link>
            <ul class="myUlOne navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <router-link to="/user/aboutUs" class="nav-link text-white">Sobre Nosotros</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/user/contact" class="nav-link text-white">Contáctanos</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/user/Reservations" class="nav-link text-white">Reservations</router-link>
              </li>
              <li class="cerrarSesion nav-item">
                  <router-link v-if="!is_auth" to="/user/logIn" class="nav-link text-white">Login</router-link>
                  <a id="myLogOut" v-else class="nav-link text-white" v-on:click="logOut">Cerrar Sesión</a>
              </li>
            </ul> 
          </div>
        </div>
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

  <footer v-if="is_auth" class="myFooter row">
    <section class="col-2">
      <div>
        <img src="./assets/logo-emprenddi.png" alt="Logo Emprenddi">
      </div>
      <span class="mySpanOne">Emprenddi</span>
      <section class="myFlag">
        <section class="myYellow"></section>
        <section class="myBlue"></section>
        <section class="myRed"></section>
      </section>
    </section>
    
    <section class="twoColumns col-6">
      <section class="myColums">
        <ul class="myUlTwo">
          <li class="nav-item">
            <router-link to="/user/Home" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/aboutUs" class="nav-link text-white">Sobre Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/privacy" class="nav-link text-white">Privacidad</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/contact" class="nav-link text-white">Contáctanos</router-link>
          </li>
        </ul>
      </section>
      <section class="myColums">
        <ul class="myUlTwo">
          <li class="nav-item">
            <router-link to="/user/blog" class="nav-link text-white">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/search" class="nav-link text-white">Buscar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/terms" class="nav-link text-white">Términos y Condiciones</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/community" class="nav-link text-white">Comunidad</router-link>
          </li>
        </ul>
      </section>
    </section>

    <section class="col-4">
      <span class="mySpanThree">Entérate de todas las novedades</span>
      <form action="">
        <section class="mt-2">
          <input type="text" placeholder="Ingresa tu email">
          <a class="mySubs" href="#">Suscribirse</a>
        </section>
        <section class="socialNet">
          <a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
          <a target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
          <a target="_blank" href="https://www.snapchat.com/"><i class="fab fa-snapchat-ghost"></i></a>
          <a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
          <a target="_blank" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
        </section>
      </form>
    </section>
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
			
			toastr.success('¡Has iniciado sesión correctamente!','Logueo exitoso', {timeOut: 1000});
      setTimeout(() => {
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        this.loadHome();
      }, 1500);
    },

    completedSignUp: function(data) {
      toastr.success('Registro Exitoso','¡Bien!', {timeOut: 1000, positionClass: 'toast-top-right'});
      
      setTimeout(() => {
        this.completedLogIn(data);
      }, 1500);
    },
    
    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    logOut: function () {
			toastr.success('¡Has cerrado sesión!','Sesión cerrada', {timeOut: 1000, positionClass: 'toast-top-center'});
      setTimeout(() => {
        localStorage.clear();
        this.loadLogIn();
      }, 1500);
		},
  }  

};
</script>

<style scoped>
.myNav {
  background-color: #E5E9F2;
  padding: 20px;
}

.myNav a {
  color: #5E6873!important;
  font-weight: 700;
}

.logo {
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
  display: flex;
}

.logo:hover {
  transform: scale(1.02, 1.02);
  transition: all .3s ease;
}

.logo div, .myFooter div {
  width: 50px;
  height: 50px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.logo div img, .myFooter div img {
  width: 65%;
  height: 65%;
  margin-bottom: 3px;
}

.logo .mySpanOne {
  position: relative;
  margin-top: 4px;
  margin-left: 5px;
  color: #47525E;
  font-size: 28px;
  text-shadow: 2px 1px 1px #000000;
}

.myUlOne {
  position: absolute;
  font-size: 16px;
  right: 0px;
}

.myUlOne a, .myFooter {
  cursor: pointer;
  border-radius: 10px;
}

.myUlOne li a:hover {
  color: #ffffff!important;
  background: #47525E;
  transition: all .3s ease;
} 

#myLogOut:hover {
  background: #dc3545;
  transition: all .3s ease;
}

.cerrarSesion {
  margin-left: 50px;
}

.myFooter {
  background-color: #47525E;
  padding: 65px;
}

.myFooter .mySpanOne {
  position: relative;
  top: -47px;
  left: 55px;
  font-size: 29px;
  color: #ffffff;
  font-weight: bold;
  cursor: default;
}

.myFooter .twoColumns {
  display: flex;
}

.myFooter input {
  padding: 8px;
  border-radius: 5px;
}

.myFooter .mySubs {
  text-decoration: none;
  background: #ffffff;
  color: #47525E;
  padding: 12px;
  border-radius: 5px;
  margin-left: 5px;
}

.myFooter .mySubs:hover {
  background-color: #2C3034;
  color: #ffffff;
  transition: all .3s ease;
}

.myUlTwo li {
  list-style: none;
}

.myUlTwo li a {
  font-size: 16px;
}

.myFooter .socialNet {
  width: 220px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  margin-top: 40px;
}

.myFooter .socialNet a {
  color: #ffffff;
}

.myFooter .socialNet a:hover {
  color: #2C3034;
  transform: scale(1.5, 1.5);
  transition: all .3s ease;
}

.mySpanThree {
  color: #ffffff;
  cursor: default;
}

.myFlag {
  width: 100px; 
  height: 50px;
  position: absolute;
  left: 150px;
  margin-bottom: 500px;
  cursor: default;
}

.myFlag .myYellow {
  background: yellow;
  height: 15px
}

.myFlag .myBlue {
  background: blue;
  height: 15px;
}

.myFlag .myRed {
  background: red;
  height: 20px;
}
</style>
