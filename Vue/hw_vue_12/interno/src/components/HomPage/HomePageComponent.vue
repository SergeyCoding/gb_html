<template>
  <div>
    <main class="main">
      <div class="main__banner">
        <!-- <img src="./img/Photo.png" alt="" /> -->
        <div class="main__banner-intro">
          <h1>Let Your Home Be Unique</h1>
          <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
          <button class="main__button">
            <p>Get Started</p>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                id="Vector"
                d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="projects">
        <div class="projects__heading">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of page lookings
            at its layouts points.
          </p>
        </div>

        <div class="projects__list">
          <div class="projects__item">
            <div class="border-top-right">
              <img src="@/assets/img/project01.png" alt="1" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
          <div class="projects__item">
            <div class="border-top-left">
              <img src="@/assets/img/project02.png" alt="2" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
          <div class="projects__item">
            <div class="border-bottom-right">
              <img src="@/assets/img/project03.png" alt="3" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
          <div class="projects__item">
            <div class="border-bottom-left">
              <img src="@/assets/img/project04.png" alt="4" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
        </div>
      </div>
    </main>
    <!-- counter -->
    <CounterComponent></CounterComponent>

    <!-- blog  -->
    <BlogComponent />

    <!--  -->
  </div>
</template>

<script>
import BlogComponent from "./BlogComponent.vue";
import CounterComponent from "./CounterComponent.vue";

export default {
  name: "HomePageComponent",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    revert() {
      this.message = this.message.split("").reverse().join("");
    },
  },
  components: { CounterComponent, BlogComponent },
};
</script>

<style lang="scss" scoped></style>
