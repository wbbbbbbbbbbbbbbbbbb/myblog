import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import blogBody from '@/components/blogBody'
import blogProject from '@/components/blogProject'
import writings from '@/components/writings'
import blogMessage from '@/components/blogMessage'
import blogMe from '@/components/blogMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogBody',
      redirect: 'blogBody'
    }, {
      path: '/blogBody',
      name: 'blogBody',
      component: blogBody
    },{
      path: '/blogProject',
      name: 'blogProject',
      component: blogProject
    }, {
      path: '/writings',
      name: 'writings',
      component: writings
    }, {
      path: '/blogMessage',
      name: 'blogMessage',
      component: blogMessage
    }, {
      path: '/blogMe',
      name: 'blogMe',
      component: blogMe
    }
  ]
})
