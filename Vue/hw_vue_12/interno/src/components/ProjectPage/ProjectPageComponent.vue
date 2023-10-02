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
      <ProjectItemComponent
        :img-width="585"
        :img-height="853"
        :img-src="require('@/assets/img/project-photo01.png')"
        img-alt="project 1-01"
        title="Minimal Bedroom table"
        breadcrumbs="Decor / Artchitecture"
      ></ProjectItemComponent>
    </main>
  </div>
</template>

<script>
import CategoriesComponent from "./CategoriesComponent.vue";
import ProjectItemComponent from "./ProjectItemComponent.vue";

export default {
  name: "ProjectPageComponent",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { CategoriesComponent, ProjectItemComponent },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 200px;
}
</style>
