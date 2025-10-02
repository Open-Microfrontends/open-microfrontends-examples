import { createRouter, createWebHistory } from 'vue-router'
import PageA from './PageA.vue'
import PageB from './PageB.vue'

export default (routePrefix: string) => {
    const routes = [
        { path: `${routePrefix}/`, component: PageA },
        { path: `${routePrefix}/pageB`, component: PageB },
    ]

    return createRouter({
        history: createWebHistory(),
        routes,
    });
}
