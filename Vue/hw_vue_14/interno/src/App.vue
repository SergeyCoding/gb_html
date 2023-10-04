<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <BodyContent>
      <Header @change-page="onChangePage"></Header>

      <HomePageComponent v-if="currentPage === 'Home'"></HomePageComponent>
      <ProjectPageComponent v-if="currentPage === 'Project'"></ProjectPageComponent>
      <BlogPageComponent @change-page="onChangePage" v-if="currentPage === 'Blog'"></BlogPageComponent>

      <BlogDetailsPageComponent v-if="currentPage === 'BlogDetails'"></BlogDetailsPageComponent>
      <ProjectDetailsPageComponent v-if="currentPage === 'ProjectDetails'" />

      <Footer></Footer>
    </BodyContent>
  </div>
</template>

<script>
import BodyContent from "./components/BodyContentComponent.vue";
import Header from "./components/BodyContent/HeaderComponent.vue";
import Footer from "./components/BodyContent/FooterComponent.vue";
import ProjectPageComponent from "./components/ProjectPage/ProjectPageComponent.vue";
import HomePageComponent from "./components/HomPage/HomePageComponent.vue";
import BlogDetailsPageComponent from "./components/BlogDetailsPage/BlogDetailsPageComponent.vue";
import BlogPageComponent from "./components/BlogPage/BlogPageComponent.vue";
import ProjectDetailsPageComponent from "./components/ProjectDetailsPage/ProjectDetailsPageComponent.vue";

export default {
  name: "App",
  components: {
    BodyContent,
    Header,
    Footer,
    ProjectPageComponent,
    HomePageComponent,
    BlogDetailsPageComponent,
    BlogPageComponent,
    ProjectDetailsPageComponent,
  },
  data() {
    return {
      pages: ["Home", "Project", "Blog", "BlogDetails", "ProjectDetails"],
      currentPage: "Project",
    };
  },
  mounted() {
    this.currentPage = this.pages[4];
  },
  methods: {
    onChangePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss">
// @import "./scss/test";
@import "./scss/style";
</style>
