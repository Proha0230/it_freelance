import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/theme.css'
import {router} from './router'

createApp(App)
.use(store)
.use(router)
.mount('#app')
