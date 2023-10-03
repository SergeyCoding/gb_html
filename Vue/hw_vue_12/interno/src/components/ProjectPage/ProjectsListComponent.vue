<template>
  <div class="project-list">
    <div class="left">
      <ProjectItemComponent
        :img-width="x.imgWidth"
        :img-height="x.imgHeight"
        :img-src="x.imgSrc"
        :img-alt="x.imgAlt"
        :title="x.title"
        :breadcrumbs="x.breadcrumbs"
        v-for="x in leftSide"
        :key="x.id"
      />
    </div>
    <div class="right">
      <ProjectItemComponent
        :img-width="x.imgWidth"
        :img-height="x.imgHeight"
        :img-src="x.imgSrc"
        :img-alt="x.imgAlt"
        :title="x.title"
        :breadcrumbs="x.breadcrumbs"
        v-for="x in rightSide"
        :key="x.id"
      />
    </div>
  </div>
</template>

<script>
import ProjectItemComponent from "./ProjectItemComponent.vue";
import { getBathrooms, getBedrooms, getKitchens, getLivingAreas } from "./../../data/projects-data.js";

export default {
  name: "ProjectsListComponent",

  props: {
    currentProjects: String,
  },
  data() {
    return {
      currentPage: 0,
      pageLimit: 8,
    };
  },
  mounted() {},
  methods: {
    projects() {
      switch (this.currentProjects) {
        case "Bathrooms":
          return getBathrooms(this.currentPage, this.pageLimit);
        case "Bedrooms":
          return getBedrooms(this.currentPage, this.pageLimit);
        case "Kitchens":
          return getKitchens(this.currentPage, this.pageLimit);
        case "LivingArea":
          return getLivingAreas(this.currentPage, this.pageLimit);
      }
      return [];
    },
  },
  components: { ProjectItemComponent },
  computed: {
    leftSide() {
      console.log(this.projects());
      return this.projects().filter((v, i) => i % 2 === 0);
    },
    rightSide() {
      return this.projects().filter((v, i) => i % 2 === 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.project-list {
  display: flex;
  justify-content: space-between;
}
</style>
