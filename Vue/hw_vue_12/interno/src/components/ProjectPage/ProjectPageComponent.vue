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
    <main class="project-page"></main>
  </div>
</template>

<script>
import CategoriesComponent from "./CategoriesComponent.vue";

export default {
  name: "ProjectPageComponent",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { CategoriesComponent },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 200px;
}
</style>
