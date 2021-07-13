import 'element-plus/packages/theme-chalk/src/base.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
