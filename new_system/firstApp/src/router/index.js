import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import ( "../views/Login.vue"),
    },
    {
      path: '/base',
      name: 'base',
      component: () => import ( "../views/Base.vue"),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ( "../views/Home.vue"),
      children:[
        {
          path:'/overview',
          name:'overview',
          component: () => import ( "../views/Overview.vue"),
        },
        {
          path:'/fish',
          name:'fish',
          component: () => import ( "../views/Fish.vue"),
        },
        {
          path:'/monitor',
          name:'monitor',
          component: () => import ( "../views/Monitor.vue"),
        },
        {
          path:'/feed',
          name:'feed',
          component: () => import ( "../views/Feed.vue"),
        },
        {
          path:'/wash',
          name:'wash',
          component: () => import ( "../views/Wash.vue"),
        },
      ]
    },
  ]
})
