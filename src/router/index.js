import { createRouter, createWebHistory } from 'vue-router'
import Forms from "../components/Forms.vue"
import home from '../components/home.vue'
import perfil from '../components/perfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Forms
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: perfil
    }
  ]
})

export default router
