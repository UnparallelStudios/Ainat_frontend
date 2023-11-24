import { createRouter, createWebHistory } from 'vue-router'
import DashboardPageVue from '../components/DashboardPage.vue'
import LoginPageVue from '../components/LoginPage.vue'
import DetailsPageVue from '../components/DetailsPage.vue'
import AlertCard from "../components/AlertCard.vue"
import MainPage from "../components/MainPage.vue"

const routes = [
    {
        path: '/dash',
        name: 'dash',
        component: DashboardPageVue
    },
    {
        path:'/login',
        name: 'login', 
        component: LoginPageVue
    },
    {
        path:'/details',
        name: 'details',
        component: DetailsPageVue
    },
    {
        path:'/alert',
        name: 'alert',
        component: AlertCard
    },
    {   
        path:'/',
        name: 'main',
        component: MainPage
    }
]

const router = createRouter({history: createWebHistory('/'),routes})

export default router