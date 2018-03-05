import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import User from './components/User';
import Test from './components/Test';

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: User},
    {path: '/test', component: Test}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  components: {App},
  template: `
            <div id="app">
              <ul>
                <li><router-link to="/">Users</router-link></li>
                <li><router-link to="/test">Test</router-link></li>
              </ul>
              <router-view></router-view>
            </div>
      `
}).$mount('#app');
