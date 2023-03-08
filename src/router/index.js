import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/public/Home.vue'
import About from '../views/public/About.vue'
import Contact from '../views/public/Contact.vue'
import NotFound from '../views/NotFound.vue'
import Layout from '../views/public/Layout.vue'
const routes = [

  {
    path: '/',
    name:'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/Contact',
        name: 'Contact',
        component:  Contact
      },
      {
        path: '/About',
        name: 'About',
        component: About
      },
    ]
  },
  {
    path: '/:pathMatcyh(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
