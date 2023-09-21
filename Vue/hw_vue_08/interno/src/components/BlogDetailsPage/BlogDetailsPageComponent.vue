<template>
  <div>
    <section class="blog-details-page__banner"></section>
    <!--  -->
    <main class="blog-details-page">
      <BlogDetails></BlogDetails>
    </main>
  </div>
</template>

<script>
import BlogDetails from './BlogDetailsComponent.vue';
export default {
  name: 'BlogDetailsPageComponent',

  data() {
    return {};
  },

  components: { BlogDetails },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
