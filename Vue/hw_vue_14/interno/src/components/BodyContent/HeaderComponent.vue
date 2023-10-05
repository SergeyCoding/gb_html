<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo_img">
        <router-link to="/">
          <img src="@/assets/img/Logo.png" alt="" />
        </router-link>
      </div>
      <router-link to="/">
        <p class="header__caption">Interno</p>
      </router-link>
    </div>

    <menu class="menu">
      <router-link to="/home"> <p>Home</p> </router-link>
      <router-link to="/project"><p>Project</p> </router-link>
      <router-link to="/blog"><p>Blog</p></router-link>
    </menu>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped></style>
