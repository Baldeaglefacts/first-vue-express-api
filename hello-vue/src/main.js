import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI.js'

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')
