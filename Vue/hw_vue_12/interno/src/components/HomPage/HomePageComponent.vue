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
              <img src="./img/project01.png" alt="1" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
          <div class="projects__item">
            <div class="border-top-left">
              <img src="./img/project02.png" alt="2" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
          <div class="projects__item">
            <div class="border-bottom-right">
              <img src="./img/project03.png" alt="3" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
          <div class="projects__item">
            <div class="border-bottom-left">
              <img src="./img/project04.png" alt="4" />
            </div>
            <h3>Modern Kitchan</h3>
            <p>Decor / Artchitecture</p>
          </div>
        </div>
      </div>
    </main>
    <!--  -->
    <section class="counter">
      <div class="counter__content">
        <div class="counter__item" v-for="(c, i) in arr">
          <p>{{ c.count }}</p>
          <p class="counter__text">{{ c.name }}</p>
          <div class="counter__line" v-if="i < arr.length - 1"></div>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="blog">
      <div class="projects__heading">
        <h2>Articles & News</h2>
        <p>
          It is a long established fact that a reader will be distracted by the of readable content of a page when
          lookings at its layouts the points of using.
        </p>
      </div>
      <div class="blog__list">
        <div class="blog__item" :class="{ blog__item_selected: blog.isSelected }" v-for="(blog, i) in blogs" :key="i">
          <div class="blog__pic">
            <img :src="blog.img" :alt="blog.alt" />
          </div>
          <p>{{ blog.text }}<br />{{ blog.text2 }}</p>
          <div class="blog__nav">
            <p>26 December,2022</p>
            <a href="blog-details.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "HomePageComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
