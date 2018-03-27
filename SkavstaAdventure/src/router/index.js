import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Arrival from '@/components/Arrival'
import Departure from '@/components/Departure'
import Information from '@/components/information'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/arrival',
      name: 'Arrival',
      component: Arrival
    },
    {
      path: '/departure',
      name: 'Departure',
      component: Departure
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
