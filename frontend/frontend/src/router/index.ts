import { createRouter, createWebHistory } from 'vue-router';
import ExplorerView from '../pages/ExplorerPage.vue';

const routes = [
  { path: '/', redirect: '/folders' },
  { path: '/folders', component: ExplorerView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
