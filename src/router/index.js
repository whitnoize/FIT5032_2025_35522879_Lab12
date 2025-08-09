import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import LoginView from '../views/LoginView.vue'

export const isAuthenticated = ref(false)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { auth: true }
  },
  { path: '/denied', 
    name: 'AccessDenied', 
    component: AccessDeniedView 
  },
  { 
    path: '/login',
    name: 'Login', 
    component: LoginView 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !isAuthenticated.value) {
    next({ name: 'AccessDenied' })
  } else {
    next()
  }
})

export default router
