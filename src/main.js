import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import breadcrumbs from 'vue-3-breadcrumbs'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(breadcrumbs, {
  includeComponent: true
})

app.mount('#app')
