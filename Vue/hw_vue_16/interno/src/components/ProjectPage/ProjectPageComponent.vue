<template>
  <div>
    <!--  -->
    <section class="project-page__banner">
      <div class="project-page__banner-intro">
        <h1>Our Project</h1>
        <p>Home / Project</p>
      </div>
    </section>
    <!--  -->
    <div class="categories">
      <CategoriesComponent @change-category="changeCategory" />
    </div>
    <!--  -->
    <main class="project-page">
      <ProjectsListComponent :current-projects="currentCategory" />
      <PaginationComponent :total-pages="totalPages" :in-page="currentPage" @out-page="outPage"></PaginationComponent>
    </main>
  </div>
</template>

<script>
import CategoriesComponent from "./CategoriesComponent.vue";
import ProjectsListComponent from "./ProjectsListComponent.vue";
import PaginationComponent from "../PaginationComponent.vue";

export default {
  name: "ProjectPageComponent",
  data() {
    return {
      currentCategory: "",
      currentPage: 1,
      totalPages: 7,
    };
  },
  mounted() {},
  methods: {
    changeCategory(category) {
      this.currentCategory = category;
    },

    outPage(page) {
      this.currentPage = Number(page.page);
    },
  },
  components: { CategoriesComponent, ProjectsListComponent, PaginationComponent },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 200px;
}
</style>
