import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WeChat from './views/WeChat'
import MyLike from './views/MyLike'
import MakeFriend from './views/MakeFriend'
import About from './views/About'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'

    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          name: 'home',
          path: '',
          component: MyLike
        },
        {
          path: 'friend',
          component: MakeFriend
        },
        {
          path: 'about',
          name: 'about',
          component: About
        }

      ]
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: WeChat
    }
  ]
})
