import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import childPage from  '@/components/childPage'
import index from '@/components/index'
import songList from  '@/components/songList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
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
    {
      path: '/songList',
      name: 'songList',
      component: songList
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // }
  ]
})
