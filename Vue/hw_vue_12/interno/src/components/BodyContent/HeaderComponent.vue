<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo_img">
        <img src="@/assets/img/Logo.png" alt="" />
      </div>
      <p class="header__caption">Interno</p>
    </div>

    <menu class="menu">
      <a @click="goToPage('Home')" href="#">
        <p>Home</p>
      </a>
      <a @click="goToPage('Project')" href="#">
        <p>Project</p>
      </a>
      <a @click="goToPage('Blog')" href="#">
        <p>Blog</p>
      </a>
    </menu>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    goToPage(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>

<style scoped></style>
