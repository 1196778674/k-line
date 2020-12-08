import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from '@/components/demo1'
import Demo2 from '@/components/demo2'
import Index from '@/components/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Demo1',
      name: 'Demo1',
      component: Demo1
    },
    {
      path: '/Demo2',
      name: 'Demo2',
      component: Demo2
    }
  ],
 // mode: 'history',
})
