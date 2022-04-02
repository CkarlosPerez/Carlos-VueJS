import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClienteView from '../views/ClienteView.vue'
import PasteleroView from '../views/PasteleroView.vue'
import SeleccionView from '../views/SeleccionView.vue'
import PedidoView from '../views/PedidoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: ClienteView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView
  },
  {
    path: '/seleccion',
    name: 'seleccion',
    component: SeleccionView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: PedidoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
