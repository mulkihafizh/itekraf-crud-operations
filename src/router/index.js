import store from '../stores'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/dashboard',
            name: 'DashboardLayout',
            component: DashboardLayout,
            children: [
                {
                    path: '',
                    name: 'Dashboard',
                    component: DashboardView
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['auth/isLoggedIn']

    if (to.path.startsWith('/dashboard') && !isLoggedIn) {
        next('/')
    }
    else if (to.path === '/' && isLoggedIn) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
