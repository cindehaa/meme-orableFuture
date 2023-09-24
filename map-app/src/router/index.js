import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryInfo from '../components/CountryInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/info',
    //   name: 'countryInfo',
    //   component: CountryInfo,
    //   props: true
    // }
  ]
})

export default router
