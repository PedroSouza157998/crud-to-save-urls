import { createRouter, createWebHistory } from "vue-router";

import Login from '../src/view/Login.vue';
import Signup from '../src/view/Signup.vue';

const routes = [
{
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/signup',
    name: 'signup',
    component: Signup
},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;