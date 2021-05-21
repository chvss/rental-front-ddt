import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/Cart'),
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: () => import('../views/Favorite'),
        },
        {
            path: '/history',
            name: 'history',
            component: () => import('../views/History'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('../views/Catalog')
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('../views/Personal'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('../views/Signup')
        },
        {
            path: '*',
            component: () => import('../views/PageNotFound')
        }
    ]
})

export default router

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
})
