// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import axios from 'axios'
import Meta from 'vue-meta'
import Router from 'vue-router'
import SeassoneResum from './components/Seasson_resume'
import Index from './components/Index'
import Seassonblog from './components/Seasson_blog'
import MainIndex from './components/MainIndex'
import $ from 'jquery'

Vue.prototype.axios = axios
Vue.use(VueResource)
Vue.use(Meta)
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Seasson_resume',
      name: 'SeassoneResum',
      component: SeassoneResum
    },
    {
      path: '/Seasson_Blog',
      name: 'Seassonblog',
      component: Seassonblog
    },
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex
    }

  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>'
})
