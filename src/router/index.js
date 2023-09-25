import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/stockExchange',
      name: 'stockExchange',
      component: () => import('../views/StockExchangeView.vue')
    },
    {
      path: '/cryptocurrency',
      name: 'cryptocurrency',
      component: () => import('../views/CryptocurrencyView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    } else{
      return { top: 0 }
    }
  },
})

export default router
