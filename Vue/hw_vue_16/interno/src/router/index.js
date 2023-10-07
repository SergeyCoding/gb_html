import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePageComponent from '@/components/HomPage/HomePageComponent.vue';
import ProjectPageComponent from '@/components/ProjectPage/ProjectPageComponent.vue';
import ProjectDetailsPageComponent from '@/components/ProjectDetailsPage/ProjectDetailsPageComponent.vue';
import BlogPageComponent from '@/components/BlogPage/BlogPageComponent.vue';
import BlogDetailsPageComponent from '@/components/BlogDetailsPage/BlogDetailsPageComponent.vue';
import Page404Component from '@/components/Page404/Page404Component.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePageComponent,
  },
  {
    path: '/project-details',
    name: 'projectdetails',
    component: ProjectDetailsPageComponent,
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPageComponent,
  },
  {
    path: '/blog-details*',
    name: 'blogdetails',
    component: BlogDetailsPageComponent,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPageComponent,
  },
  {
    path: '/',
    name: 'root',
    component: HomePageComponent,
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404Component,
  },
  { path: '*', redirect: '/404' },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
  //   },
  // },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  // base: '/gb_html/Vue/hw_vue_14/go/',
  routes,
  // scrollBehavior() {
  //   document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  // },
});

export default router;
