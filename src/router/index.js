import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Layout from "../components/layout/Layout";
import Home1 from "../views/HomePage/Home1";
import Control from "../views/Contorl/Control";

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
                path: '/control',
                name: 'control',
                component: Control
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router