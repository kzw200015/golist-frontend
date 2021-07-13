import hljsVuePlugin from '@highlightjs/vue-plugin'
import { ElLoading } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'highlight.js/lib/common'
import 'highlight.js/styles/github.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(hljsVuePlugin).use(ElLoading).mount('#app')
