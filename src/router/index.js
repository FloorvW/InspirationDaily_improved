import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Categories from '../components/Categories.vue'
import Random from '../components/Random.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info/:id',
    name: 'info',
    component: Info
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/random',
    name: 'random',
    component: Random
  }
]

const router = new VueRouter({
  routes
})

export default router
