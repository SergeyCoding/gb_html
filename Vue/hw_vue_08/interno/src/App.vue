<template>
  <div id="app">
    <BodyContent>
      <Header></Header>
      <BlogDetailPage></BlogDetailPage>
      <Footer></Footer>
    </BodyContent>
  </div>
</template>

<script>
import BodyContent from './components/BodyContentComponent.vue';
import Header from './components/BodyContent/HeaderComponent.vue';
import Footer from './components/BodyContent/FooterComponent.vue';
import BlogDetailPage from './components/BlogDetailsPage/BlogDetailsPageComponent.vue';

export default {
  name: 'App',
  components: { BodyContent, Header, Footer, BlogDetailPage },
};
</script>

<style lang="scss">
@import './scss/test';
@import './scss/style';
</style>
