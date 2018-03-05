import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import User from '@/components/User'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'User', component: User},
    {path: '/test', name: 'Test', component: Test}
  ]
})
