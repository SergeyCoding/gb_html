<template>
  <div>
    <section class="project-details-page__banner"></section>
    <!--  -->
    <main class="project-details-page">
      <div class="project-details-page__text">
        <p class="project-details-page__title">{{ GET_CURRENT_TITLE }}</p>
        <p class="project-details-page__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam
          sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
          fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem
          suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
          pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in
          viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
      </div>
      <div class="project-details-page__img">
        <img src="@/assets/img/project-details-photo01.png" alt="" />
      </div>
      <div class="project-details-page__slider">
        <div class="project-details-page__switcher">
          <SwitcherComponent></SwitcherComponent>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SwitcherComponent from "./SwitcherComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProjectDetailsPageComponent",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { SwitcherComponent },
  computed: {
    ...mapGetters(["GET_CURRENT_TITLE", "GET_CURRENT_CONTENT"]),
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
