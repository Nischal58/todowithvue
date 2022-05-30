import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component:Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component:JobDetails,
    props:true
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  {
    path:"/:catchAll(.*)",
    name:'NotFound',
    component:NotFound
  }
  

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
