import Vue from 'vue';
import VueRouter from 'vue-router';
import checked from '@/views/checked.vue'
import unchecked from '@/views/unchecked.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'checked',
    component: checked,
  },
  {
    path: '/unchecked',
    name: 'unchecked',
    component: unchecked,
  },
];

const router = new VueRouter({
  base: `${process.env.VUE_APP_PROJECT}`, // 這是基本路徑
  mode: 'history', // 用html5的history模式
  routes,
});

export default router;
