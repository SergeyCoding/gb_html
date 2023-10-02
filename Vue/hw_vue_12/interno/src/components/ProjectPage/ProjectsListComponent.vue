<template>
  <div>
    <ProjectItemComponent
      :img-width="x.imgWidth"
      :img-height="x.imgHeight"
      :img-src="x.imgSrc"
      :img-alt="x.imgAlt"
      title="Minimal Bedroom table"
      breadcrumbs="Decor / Artchitecture"
      v-for="x in items"
      :key="x.id"
    />
  </div>
</template>

<script>
import ProjectItemComponent from "./ProjectItemComponent.vue";

export default {
  name: "ProjectsListComponent",
  data() {
    return {
      items: [
        {
          id: 1,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo01.png"),
          imgAlt: "project 1 1",
          title: "Minimal Bedroom table",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 2,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo02.png"),
          imgAlt: "project 1 1",
          title: "Minimal Bedroom table",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 3,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo03.png"),
          imgAlt: "project 1 1",
          title: "Classic Minimal Bedroom",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 4,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo04.png"),
          imgAlt: "project 1 1",
          title: "Modern Bedroom",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 5,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo05.png"),
          imgAlt: "project 1 1",
          title: "Minimal Bedroom table",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 6,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo06.png"),
          imgAlt: "project 1 1",
          title: "System Table",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 7,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo07.png"),
          imgAlt: "project 1 1",
          title: "Modern Medroom",
          breadcrumbs: "Decor / Artchitecture",
        },
        {
          id: 8,
          imgWidth: 585,
          imgHeight: 0,
          imgSrc: require("@/assets/img/project-photo08.png"),
          imgAlt: "project 1 1",
          title: "Modern Bedroom",
          breadcrumbs: "Decor / Artchitecture",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
  components: { ProjectItemComponent },
};
</script>

<style lang="scss" scoped></style>
