import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'

window.isAuth = false

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
