<template>
  <div id="app">
    <BodyContent>
      <Header @change-page="onChangePage"></Header>
      <HomePageComponent v-if="currentPage === 'Home'"></HomePageComponent>
      <BlogDetailPage v-if="currentPage === 'Blog'"></BlogDetailPage>
      <ProjectPageComponent v-if="currentPage === 'Project'"></ProjectPageComponent>
      <Footer></Footer>
    </BodyContent>
  </div>
</template>

<script>
import BodyContent from "./components/BodyContentComponent.vue";
import Header from "./components/BodyContent/HeaderComponent.vue";
import Footer from "./components/BodyContent/FooterComponent.vue";
import BlogDetailPage from "./components/BlogDetailsPage/BlogDetailsPageComponent.vue";
import ProjectPageComponent from "./components/ProjectPage/ProjectPageComponent.vue";
import HomePageComponent from "./components/HomPage/HomePageComponent.vue";

export default {
  name: "App",
  components: { BodyContent, Header, Footer, BlogDetailPage, ProjectPageComponent, HomePageComponent },
  data() {
    return {
      pages: ["Home", "BlogDetail", "Project"],
      currentPage: "Project",
    };
  },
  mounted() {
    this.currentPage = this.pages[2];
  },
  methods: {
    onChangePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/test";
@import "./scss/style";
</style>
