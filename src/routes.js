import { createRouter, createWebHistory } from 'vue-router'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './views/dashboard/Index'
import UserIndex from './views/users/Index'
import UserCreate from './views/users/Create'
import UserEdit from './views/users/Edit'
import TaskIndex from './views/tasks/Index'
import AuthLogin from './views/auth/Login'
import ProjectIndex from './views/projects/Index'
import NotFound from './views/vendor/NotFound'
import User from './views/users/User'

const routes = [
    {
        path: '/',
        name: 'Home',
        title: 'Dashboard',
        components: {
            default: Dashboard,
            Sidebar
        }
    },
    {
        path: '/user',
        meta: { requireAuth: false },
        title: 'User management',
        component: User,
        children: [
            {
                path: '',
                name: 'user.index',
                title: 'User List',
                alias: '/user',
                components: {
                    default: UserIndex,
                    Sidebar
                }
            },
            {
                path: 'create',
                name: 'user.create',
                title: 'User Create',
                components: {
                    default: UserCreate,
                    Sidebar,
                }
            },
            {
                path: 'edit/:id',
                name: 'user.edit',
                title: 'User Edit',
                components: {
                    default: UserEdit,
                    Sidebar,
                }
            },
        ]
    },
    {
        path: '/task',
        name: 'task.index',
        title: 'Task management',
        components: {
            default: TaskIndex,
            Sidebar,
            Footer
        },
        meta: { requireAuth: false },
    },
    {
        path: '/project',
        name: 'project.index',
        title: 'Project management',
        component: ProjectIndex
    },
    {
        path: '/product',
        name: 'product.index',
        title: 'Product management',
        component: ProjectIndex
    },
    {
        path: '/login',
        name: 'login',
        component: AuthLogin,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory('/'), routes
})

router.beforeEach((to, from) => {
    if (to.meta.requireAuth && !isAuth) {
        return {
            path: '/login',
            query: { redirect: to.fullPath }
        }
    }
})

export default router
