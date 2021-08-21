import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/dashboard/Index'
import UserIndex from './views/users/Index'
import UserCreate from './views/users/Create'
import UserEdit from './views/users/Edit'
import TaskIndex from './views/tasks/Index'
import AuthLogin from './views/auth/Login'
import ProjectIndex from './views/projects/Index'
import NotFound from './views/vendor/NotFound'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Dashboard
    },
    {
        path: '/user',
        name: 'user.index',
        component: UserIndex,
    },
    {
        path: '/user/create',
        name: 'user.create',
        component: UserCreate,
    },
    {
        path: '/user/edit/:id',
        name: 'user.edit',
        component: UserEdit,
    },
    {
        path: '/user/edit/:id/group/:groupId',
        name: 'user.group.edit',
        component: UserEdit,
    },
    {
        path: '/task',
        name: 'task.index',
        component: TaskIndex
    },
    {
        path: '/project',
        name: 'project.index',
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


router.beforeEach(async (to, from, next) => {

    let isAuth = false

    if (isAuth && to.fullPath != '/login') {
        return next()
    }

    return next({ name: 'login' })
})

export default router