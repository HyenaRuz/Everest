import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        breadcrumb: 'Home'
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        breadcrumb: 'aboutUs'
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
      meta: {
        breadcrumb: 'contacts'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        breadcrumb: 'services'
      }
    },
    {
      path: '/stockExchange',
      name: 'stockExchange',
      component: () => import('../views/StockExchangeView.vue'),
      meta: {
        breadcrumb: 'stockExchange'
      }
    },
    {
      path: '/cryptocurrency',
      name: 'cryptocurrency',
      component: () => import('../views/CryptocurrencyView.vue'),
      meta: {
        breadcrumb: 'cryptocurrency'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
