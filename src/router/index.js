import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/choice',
        name: 'choice',
        component: () => import('../views/ChoiceSize.vue')
    },
    {
        path: '/add24',
        name: 'add24',
        component: () => import('../components/CaseCreate')
    },
    {
        path: '/',
        name: 'list',
        component: () => import('../components/CaseList')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/CaseEdit')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
