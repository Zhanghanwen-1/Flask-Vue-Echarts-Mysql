// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 使用echarts
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;
// 使用element-ui
// 1 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
// 1 引入element-ui所有组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
