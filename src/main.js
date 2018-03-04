// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import libFlexible from 'lib-flexible'
import App from './App'
import router from './router'
import css from '@/assets/css.css'
import blogBody from '../static/blogBody.json'
import blogHead from '../static/blogHead.json'
import blogMe from '../static/blogMe.json'
import blogMessage from '../static/blogMessage.json'
import blogProject from '../static/blogProject.json'
import blogWritings from '../static/blogWritings.json'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
