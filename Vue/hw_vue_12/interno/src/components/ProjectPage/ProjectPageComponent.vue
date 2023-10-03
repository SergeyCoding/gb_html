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
      <CategoriesComponent />
    </div>
    <!--  -->
    <main class="project-page">
      <ProjectsListComponent :current-projects="currentProjects" />
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
      currentProjects: "Bedrooms",
    };
  },
  mounted() {},
  methods: {},
  components: { CategoriesComponent, ProjectsListComponent },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 200px;
}
</style>
