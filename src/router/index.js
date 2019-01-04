import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import Footer from '@/components/Footer'
import sort from '@/views/sort'
import cart from '@/views/cart'
import my from '@/views/my'
import header from '@/components/header'
import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component: home
    },
    {
      path:'/sort',
      name:'sort',
      component:sort
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path:'/my',
      name:'my',
      component:my
    },
    {
      path:'/Footer',
      name:'Footer',
      component: Footer
    },
    {
      path:'/header',
      name:'header',
      component:header
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
    }
  ]
})
