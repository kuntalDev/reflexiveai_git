import {createWebHistory,createRouter} from "vue-router";

const routes = [ 
    {
        name: 'Index',
        component: () => import('./pages/Index/Index.vue'),
        path: '/reflexiveai/',
        meta: {
            title: 'Index',
            requiresAuth: false
        },
    },
    {
        name: 'Login',
        component: () => import('./pages/Login/Login.vue'),
        path: '/reflexiveai/login',
        meta: {
            title: 'Login',
            requiresAuth: false
        },
    },
    {
        name: 'Signup',
        component: () => import('./pages/Signup/Signup.vue'),
        path: '/reflexiveai/sign-up',
        meta: {
            title: 'Signup',
            requiresAuth: false
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
	routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    },
});

export default router;