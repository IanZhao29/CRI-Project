import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Home from "@/views/Home";
import Layout from "../components/layout/Layout";
import HelloWorld from "../components/HelloWorld";

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
                component: Home
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