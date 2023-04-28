import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeLayout from '../layouts/HomeLayout'
import TableLayout from '../layouts/TableLayout'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeLayout,
  },
  {
    path: '/table',
    name: 'table',
    component: TableLayout
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
