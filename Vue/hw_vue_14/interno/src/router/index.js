import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePageComponent from '@/components/HomPage/HomePageComponent.vue';
import ProjectPageComponent from '@/components/ProjectPage/ProjectPageComponent.vue';
import ProjectDetailsPageComponent from '@/components/ProjectDetailsPage/ProjectDetailsPageComponent.vue';
import BlogPageComponent from '@/components/BlogPage/BlogPageComponent.vue';
import BlogDetailsPageComponent from '@/components/BlogDetailsPage/BlogDetailsPageComponent.vue';

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
    path: '*',
    name: 'root',
    component: HomePageComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: 'Vue/hw_vue_14/go',
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
});

export default router;
