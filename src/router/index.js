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
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/childPage',
      name: 'childPage',
      component: childPage
    },
    {
      path: '/songList',
      name: 'songList',
      component: songList,
      children:[
        {

          path: '/albumList',
          name: 'albumList',
          component: (resolve) => require(['@/components/listChild/albumList'], resolve),
      },
        {
          path: '/songlist',
          name: 'songlist',
          component: (resolve) => require(['@/components/listChild/songList'], resolve),
        },

      ]
    },

    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // }
  ]
})
