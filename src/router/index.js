import Vue from 'vue'
import Router from 'vue-router'
const _import = require("./_import_" + process.env.NODE_ENV);
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/',component: () => _import('components/frontendTest')},
    { path: '/home',component: () => _import('components/HelloWorld')},
    { path: '/frontendTest',component: () => _import('components/frontendTest')},
    { path: '/test',component: () => _import('components/Test')},
  ]
})
