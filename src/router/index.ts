import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from '@/views/pdf-app.vue'
import ThemeToggling from '@/views/theme-toggling.vue'
import About from '@/components/about-view.vue'
import Sandbox from '@/views/sandbox-view.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PdfViewer
    },
    {
      path: '/theme-toggling',
      name: 'theme-togglingh',
      component: ThemeToggling
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: Sandbox
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
