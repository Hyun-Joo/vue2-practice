import VueRouter from 'vue-router';

const routes = [
  {
    path: '/hello',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "hello-world" */ '../components/HelloWorld.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;