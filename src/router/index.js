import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import childPage from  '@/components/childPage'
// import index from '@/compomemts/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'childPage',
      component: childPage
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // }
  ]
})
