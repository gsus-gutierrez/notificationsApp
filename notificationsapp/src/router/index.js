import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },{
      path: '/usernotifications/:id',
      name: 'usernotifications',
      component: () => import('../views/UserNotifications.vue')
    },
  ]
})

export default router
