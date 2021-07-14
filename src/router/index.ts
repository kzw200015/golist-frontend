import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/ItemList.vue'),
        props: route => ({ path: route.query.path })
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


router.beforeEach((to, _, next) => {
    const path = to.query.path as string | undefined
    if (!path?.startsWith('/')) {
        next({ path: '/', query: { path: '/' + (path ?? '') } })
    } else {
        next()
    }
})

export default router