import gql from "graphql-tag";
import { createRouter, createWebHistory } from "vue-router";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

//import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Information from './components/Information.vue'
import Reservations from './components/Reservations.vue'
 
const routes = [
    // {
      //   path: '/',
        // name: 'root',
       //  component: App
    // },
     {
        path: '/user/home',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/user/logIn',
        name: 'logIn',
        component: LogIn,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/signUp',
        name: 'signUp',
        component: SignUp,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/information',
        name: 'information',
        component: Information,
        meta: { requiresAuth: true }
    },
    {
        path: '/user/reservations',
        name: 'reservations',
        component: Reservations,
        meta: { requiresAuth: true }
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const apolloClient = new ApolloClient({
    link: createHttpLink({ uri: 'https://emprenddi-apigateway.herokuapp.com/' }),
    cache: new InMemoryCache()
})

async function isAuth() {
    if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
        return false;
    }

    try {
        var result = await apolloClient.mutate({
            mutation: gql `
                mutation ($refresh: String!) {
                    refreshToken(refresh: $refresh) {
                        access
                    }
                }
            `,
            variables: {
                refresh: localStorage.getItem("token_refresh"),
            },
        })

        localStorage.setItem("token_access", result.data.refreshToken.access);
        return true;
    } catch {
        localStorage.clear();
        alert("Su sesión expiró, por favor vuelva a iniciar sesión");
        return false;
    }
}

router.beforeEach(async(to, from) => {
    var is_auth = await isAuth();

    if (is_auth == to.meta.requiresAuth) return true
    if (is_auth) return { name: "home" };
    return { name: "login" };
})

export default router;