<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo_img">
        <img src="/img/Logo.png" alt="" />
      </div>
      <p class="header__caption">Interno</p>
    </div>

    <menu class="menu">
      <a href="#">
        <p>Home</p>
      </a>
      <a href="#">
        <p>Project</p>
      </a>
      <a href="blog.html">
        <p>Blog</p>
      </a>
    </menu>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
