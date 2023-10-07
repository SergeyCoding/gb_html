<template>
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
</template>

<script>
export default {
  name: "BlogComponent",

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
      ],
    };
  },

  computed: {
    isSelected(v) {
      if (v) {
        return "blog__item_selected";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
