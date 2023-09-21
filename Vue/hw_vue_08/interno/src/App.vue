<script setup>
import BodyContent from './components/BodyContentComponent.vue';
import Header from './components/BodyContent/HeaderComponent.vue';
import Footer from './components/BodyContent/FooterComponents.vue';
</script>

<template>
  <BodyContent>
    <Header></Header>
    <Footer></Footer>
  </BodyContent>
</template>

<style lang="scss">
@import './scss/style.scss';
</style>
