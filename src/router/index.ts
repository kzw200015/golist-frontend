import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ItemList from '../components/ItemList.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: ItemList,
        props: route => ({ path: route.query.path })
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


router.beforeEach((to, _, next) => {
    if (to.query.path === '' || !to.query.path) {
        next({ path: '/', query: { path: '/' } })
    } else {
        next()
    }
})

export default router