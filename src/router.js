import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/homePage',
    name: 'homePage',
    // with webpack code splitting (best for larger apps, it can lazy load then):
    component: () => import(/* webpackChunkName: "blog-show" */ './views/homePage.vue')
  },
  {
    path: '/',
    redirect: '/homePage'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
