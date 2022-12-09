import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'home',
    component: () => import('../components/CreateComponent'),
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent'),
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../components/UploadCSVComponent'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../components/LoginComponent'),
  },
  {
    path: '/viewUser/:id',
    name: 'viewUser',
    component: () => import('../components/ViewComponent'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
