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
      currentPage: 1,
      pageLimit: 8,
    };
  },
  mounted() {},
  methods: {
    projects() {
      // categories: ["Bathroom", "Bed Room", "Kitchen", "Living Area"],
      console.log("this.currentProjects", this.currentProjects);
      switch (this.currentProjects) {
        case "Bathroom":
          return getBathrooms(this.currentPage, this.pageLimit);
        case "Bed Room":
          return getBedrooms(this.currentPage, this.pageLimit);
        case "Kitchen":
          return getKitchens(this.currentPage, this.pageLimit);
        case "Living Area":
          return getLivingAreas(this.currentPage, this.pageLimit);
      }
      return { data: [], pages: 0 };
    },
  },
  components: { ProjectItemComponent },
  computed: {
    leftSide() {
      const p = this.projects();
      return p.data.filter((_, i) => i % 2 === 0);
    },
    rightSide() {
      const p = this.projects();
      return p.data.filter((_, i) => i % 2 === 1);
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
