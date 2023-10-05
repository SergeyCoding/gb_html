<template>
  <div>
    <section class="project-details-page__banner"></section>
    <!--  -->
    <main class="project-details-page">
      <div class="project-details-page__text">
        <p class="project-details-page__title">{{ GET_CURRENT_TITLE }}</p>
        <p class="project-details-page__content">
          {{ GET_CURRENT_CONTENT }}
        </p>
      </div>
      <div class="project-details-page__img">
        <img :src="img" alt="" />
      </div>
      <div class="project-details-page__slider">
        <div class="project-details-page__switcher">
          <SwitcherComponent @switch="onSwith"></SwitcherComponent>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SwitcherComponent from "./SwitcherComponent.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ProjectDetailsPageComponent",
  data() {
    return {
      img: require("@/assets/img/project-details-photo02.png"),
    };
  },
  mounted() {},
  methods: {
    onSwith(switcher) {
      this.SET_CURRENT_ID(switcher - 1);
      this.img = require("@/assets/img/" + this.GET_CURRENT_IMAGE);
    },
    ...mapMutations(["SET_CURRENT_ID"]),
  },
  components: { SwitcherComponent },
  computed: {
    ...mapGetters(["GET_CURRENT_TITLE", "GET_CURRENT_CONTENT", "GET_CURRENT_IMAGE"]),
  },
};
</script>

<style lang="scss" scoped>
@use "./../../scss/vars";
.project-details-page {
  width: 1200px;
  margin: 200px auto 96px;
  border: inherit;

  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }

  &__img {
    margin-top: 100px;
    border-radius: 70px;
    overflow: hidden;
  }

  &__text {
    width: 658px;
    margin-left: auto;
    margin-right: auto;
  }

  &__content {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }

  &__switcher {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  &__banner {
    margin-top: 45px;
    width: 100%;
    height: 351px;
    background-origin: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/img/project-details-banner.jpg");
  }
}
</style>
