import { createApp } from 'vue'

import { router } from './router.js'

import './assets/styles/main.scss'
import App from './App.vue'
import { svgIconDirective } from './directives'


const app = createApp(App)

app.use(router)

app.directive('svg-icon', svgIconDirective)

app.mount('#app')
