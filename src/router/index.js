import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../views/Home'),
    meta: {
      title: '首页'
    },
  },
  {
    path: "/category",
    name: "category",
    component: () => import('../views/Category'),
    meta: {
      title: '分类页'
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import('../views/My'),
    meta: {
      title: '我的页'
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login'),
    meta: {
      title: '登录页'
    },
  },
  {
    path: "/setpsw",
    name: "setpsw",
    component: () => import('../views/setpsw'),
    meta: {
      title: '设置密码页'
    },
  },
  {
    path: "/quit",
    name: "quit",
    component: () => import('../views/Quit'),
    meta: {
      title: '设置密码页'
    },
  },
  {
    path: "/bookcity",
    name: "bookcity",
    component: () => import('../views/BookCity'),
    meta: {
      title: '书城页'
    },
  },
  {
    path: "/bookcitysearch",
    name: "bookcitysearch",
    component: () => import('../views/BookcitySearch'),
    meta: {
      title: '书城页'
    },
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import('../views/Detail'),
    meta: {
      title: '详情页'
    },
  },
  {
    path: "/list",
    name: "list",
    component: () => import('../views/List'),
    meta: {
      title: '列表页'
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import('../views/cart'),
    meta: {
      title: '购物车页'
    },
  },
];

const router = new VueRouter({
  mode: "hash",//上线修改为history
  base: process.env.BASE_URL,
  routes
});

export default router;
