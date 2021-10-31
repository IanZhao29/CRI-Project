import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Layout from "../components/layout/Layout";
import HelloWorld from "../components/HelloWorld";
import Home1 from "../views/HomePage/Home1";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/main',
        name: 'main',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home1
            },
            {
                path: '/table',
                name: 'table',
                component: HelloWorld
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router