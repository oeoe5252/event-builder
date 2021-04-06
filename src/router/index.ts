import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginSession from "@/router/middleware/LoginSession";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";

Vue.use(VueRouter);

const routes: VueRouter = new VueRouter({

    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home,
            beforeEnter: LoginSession
        },
        {
            path: '/login',
            component: Login,
        }
    ]

});

export default routes;
