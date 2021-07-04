import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectionSort from '../components/SelectionSort.vue'
import SortAlgorithm from '../views/SortAlgorithm.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/sortalgorithm',
  //   name: 'sortalgorithm',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/SortAlgorithm.vue')
  // },

  {
    path: '/sortalgorithm',
    component: SortAlgorithm,
    children: [
      {
        path: 'selectionsort',
        component: () => import(/* webpackChunkName: "about" */ '../components/SelectionSort.vue')
      },
      {
        path: 'insertsort',
        component: () => import(/* webpackChunkName: "Messages" */ '../components/InsertSort.vue')
      },
      {
        path: 'quicksort',
        component: () => import(/* webpackChunkName: "Profile" */ '../components/QuickSort.vue')
      },



 
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
