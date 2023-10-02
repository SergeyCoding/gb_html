<template>
  <div>
    <!--  -->
    <section class="blog-page__banner">
      <div class="blog-page__banner-intro">
        <h1>Articles & News</h1>
        <p>Home / Blog</p>
      </div>
    </section>
    <!--  -->
    <main class="blog-page__main">
      <div class="blog-page__post">
        <h2>Latest Post</h2>
        <div class="blog-page__post-content">
          <div class="blog-page__post-img">
            <img src="@/assets/img/blog_latest-post.png" alt="latest post" />
          </div>
          <div class="blog-page__post-text">
            <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary
              to popular belief.
            </p>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
            <div class="blog-page__post-next">
              <p>26 December,2022</p>
              <a href="blog-details.html">
                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="&#62;">
                    <circle id="Ellipse" cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                    <path
                      id="Vector"
                      d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <section class="blog-page__articles">
        <h2>Articles & News</h2>
        <div class="blog__list">
          <div class="blog__item" :class="{ blog__item_selected: blog.isSelected }" v-for="(blog, i) in blogs" :key="i">
            <div class="blog__pic">
              <img :src="blog.img" :alt="blog.alt" />
            </div>
            <p>{{ blog.text }}<br />{{ blog.text2 }}</p>
            <div class="blog__nav">
              <p>26 December,2022</p>
              <a @click="goToPage('BlogDetails')" href="#">
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
      <div class="blog-page__pagination">
        <div class="pagination">
          <div class="pagination__item">
            <div class="pagination__number">
              <p>01</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
            </svg>
          </div>
          <div class="pagination__item">
            <div class="pagination__number">
              <p>11</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
          </div>
          <div class="pagination__item">
            <div class="pagination__number">
              <p>02</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
          </div>
          <div class="pagination__item">
            <div class="pagination__number">
              <p>03</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
          </div>
          <div class="pagination__item">
            <div class="pagination__number">
              <p>03</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
          </div>
          <div class="pagination__item">
            <div class="pagination__number">
              <p>03</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
          </div>
          <div class="pagination__item">
            <div class="pagination__number">
              <p></p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path
                d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "BlogPageComponent",

  data() {
    return {
      blogs: [
        {
          img: require("@/assets/img/blog01.png"),
          alt: "blog1",
          text: "Let’s Get Solution For Building Construction",
          text2: `Work`,
          data: "26 December,2022",
          isSelected: false,
        },
        {
          img: require("@/assets/img/blog02.png"),
          alt: "blog2",
          text: "Low Cost Latest Invented Interior Designing",
          text2: "Ideas.",
          data: "22 December,2022",
          isSelected: true,
        },
        {
          img: require("@/assets/img/blog03.png"),
          alt: "blog3",
          text: "Best For Any Office & Business Interior",
          text2: "Solution",
          data: "25 December,2022",
          isSelected: false,
        },
        {
          img: require("@/assets/img/blog04.png"),
          alt: "blog4",
          text: "Let’s Get Solution For Building Construction",
          text2: `Work`,
          data: "26 December,2022",
          isSelected: false,
        },
        {
          img: require("@/assets/img/blog05.png"),
          alt: "blog5",
          text: "Low Cost Latest Invented Interior Designing",
          text2: "Ideas.",
          data: "22 December,2022",
          isSelected: false,
        },
        {
          img: require("@/assets/img/blog06.png"),
          alt: "blog6",
          text: "Best For Any Office & Business Interior",
          text2: "Solution",
          data: "25 December,2022",
          isSelected: false,
        },
      ],
    };
  },

  mounted() {},

  methods: {
    goToPage(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>

<style lang="scss" scoped></style>
