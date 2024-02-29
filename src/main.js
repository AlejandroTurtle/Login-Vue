import { createApp } from 'vue' // Versão Vue 3
import App from './App.vue'
import router from './router'
import store from './Controller'


createApp(App).use(store).use(router).mount('#app')

