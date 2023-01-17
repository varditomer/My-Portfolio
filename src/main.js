import { createApp } from 'vue'

import { router } from './router.js'

import './assets/styles/main.scss'
import App from './App.vue'
import { svgIconDirective } from './directives'
import copyText from "@meforma/vue-copy-to-clipboard"



const app = createApp(App)

app.use(router)
app.use(copyText)

app.directive('svg-icon', svgIconDirective)

app.mount('#app')
