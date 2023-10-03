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
    </main>
  </div>
</template>

<script>
import CategoriesComponent from "./CategoriesComponent.vue";
import ProjectsListComponent from "./ProjectsListComponent.vue";

export default {
  name: "ProjectPageComponent",
  data() {
    return {
      currentCategory: "",
    };
  },
  mounted() {},
  methods: {
    changeCategory(category) {
      this.currentCategory = category;
    },
  },
  components: { CategoriesComponent, ProjectsListComponent },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 200px;
}
</style>
