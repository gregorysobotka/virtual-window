import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'about',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/sign-in',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/SignIn')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'create',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'search',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'history',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
