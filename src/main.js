import { createApp } from 'vue'

import { router } from './router.js'

import './assets/styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router)

app.mount('#app')
