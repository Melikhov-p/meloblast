import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tracks',
    name: 'Tracks',
    component: () => import( '../views/Tracks.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import( '../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
