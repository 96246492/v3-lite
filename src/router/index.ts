import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/home/index.vue'),
        },
    ],
})

router.beforeEach(() => {
    NProgress.start()
})
router.afterEach(() => {
    NProgress.done()
})

export default router
