import Vue from 'vue';
import Router from 'vue-router';
import Home from "../views/Home.vue"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import ( "../views/Login.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import ( "../views/Register.vue"),
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import ( "../views/Forget.vue"),
    },
    {
      path: '/register_success',
      name: 'register_success',
      component: () => import ( "../views/RegisterOk.vue"),
    },
    {
      path: '/base_select',
      name: 'base_select',
      component: () => import ( "../views/Base_select.vue"),
    },
    // {
    //   path: '/overview',
    //   name: 'overview',
    //   component: () => import ( "../views/Overview.vue"),
    // },
    // {
    //   path: '/overview',
    //   name: 'overview',
    //   component: () => import ( "../views/Overview.vue"),
    // },
    // {
    //   path: '/waterq',
    //   redirect: 'waterq',
    // },
    // {
    //   path: '/overview',
    //   redirect: '/overview'
    // },
    {
      path: '/overview',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/overview',
          name: 'overview',
          meta:{
            title: '系统总览'
          },
          component: () => import ( "../views/Overview.vue"),
        },
        {
          path: '/monitor',
          name: 'monitor',
          meta:{
            title: '鱼群监控'
          },
          component: () => import ( "../views/Monitor.vue"),
        },
        {
          path: '/waterq',
          name: 'waterq',
          meta:{
            title: '水质监测'
          },
          component: () => import ( "../views/WaterQ.vue"),
        },
        {
          path: '/feed',
          name: 'feed',
          meta:{
            title: '投喂设施'
          },
          component: () => import ( "../views/Feed.vue"),
        },
        {
          path: '/clean',
          name: 'clean',
          meta:{
            title: '清洗设施'
          },
          component: () => import ( "../views/Clean.vue"),
        }
      ]
    },
  ],
});
