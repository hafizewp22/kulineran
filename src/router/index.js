import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import FoodsDetailView from '../views/FoodsDetailView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import PesananSuksesView from '@/views/PesananSuksesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'foodsview',
    component: FoodsView
  },
  {
    path: '/foods/:id',
    name: 'foodsdetailview',
    component: FoodsDetailView
  },
  {
    path: '/keranjang',
    name: 'keranjangview',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'pesanansuksesview',
    component: PesananSuksesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
