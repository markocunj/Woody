import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import( '../views/Login.vue')
  },
  {
    path: '/singup',
    name: 'Singup',

    component: () => import( '../views/Singup.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
