<template>
  <div id="app">
    <BodyContent>
      <Header></Header>
      <Footer></Footer>
    </BodyContent>
  </div>
</template>

<script>
import BodyContent from './components/BodyContentComponent.vue';
import Header from './components/BodyContent/HeaderComponent.vue';
import Footer from './components/BodyContent/FooterComponent.vue';

export default {
  name: 'App',
  components: { BodyContent, Header, Footer },
};
</script>

<style lang="scss">
@import './scss/test';
@import './scss/style';
</style>
