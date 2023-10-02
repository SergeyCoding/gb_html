<template>
  <div :style="[styleWidth]">
    <div class="img-container" :style="[styleWidth, styleHeight]">
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
    this.styleWidth.width = this.imgWidth + "px";
    this.styleHeight.height = this.imgHeight + "px";
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.text {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.img-container {
  background-color: gray;
}

.description {
  margin-top: 24px;
}
</style>
