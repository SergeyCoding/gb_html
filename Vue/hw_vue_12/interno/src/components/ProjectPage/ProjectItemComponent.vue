<template>
  <div class="project-item" :style="[styleWidth]">
    <div :style="[styleWidth, styleHeight]">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="description">
      <h2 class="title">{{ title }}</h2>
      <p class="text">{{ breadcrumbs }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItemComponent",

  props: {
    imgSrc: String,
    imgAlt: String,
    imgWidth: Number,
    imgHeight: Number,
    title: String,
    breadcrumbs: String,
  },

  data() {
    return {
      styleWidth: { width: "auto" },
      styleHeight: { height: "auto" },
    };
  },

  mounted() {
    if (this.imgWidth > 0) {
      this.styleWidth.width = this.imgWidth + "px";
    }

    if (this.imgHeight > 0) {
      this.styleHeight.height = this.imgHeight + "px";
    }
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@use "./../../scss/vars";
.title {
  color: vars.$text-caption-color;
  font-family: vars.$font-caption;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.text {
  color: vars.$text-color;
  font-family: vars.$font-base;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

.description {
  margin-top: 24px;
}

.project-item {
  margin-top: 40px;
}
</style>
