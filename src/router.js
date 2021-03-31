import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('./views/homePage.vue')
  },
  {
    path: '/bubbleSort',
    name: 'bubbleSort',
    component: () => import('./views/bubbleSort.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
