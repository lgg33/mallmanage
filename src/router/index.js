import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "components/Login";
import Home from "components/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from , next) => {
  if (to.path === '/login') {
    next();
  }
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr){
    return next('/login');
  }
  next();
});

export default router
