<template>
  <div>
    <BlogComponent :blog="b" v-for="b in showBlogs" :key="b.blogId" />
  </div>
</template>

<script>
import BlogComponent from './BlogComponent.vue';
import { getBlogsByTag } from '../../data/data.js';

export default {
  name: 'BlogListComponent',

  props: {
    tag: String,
  },

  data() {
    return {};
  },

  components: { BlogComponent },

  computed: {
    showBlogs() {
      return getBlogsByTag(this.tag);
    },
  },
};
</script>

<style lang="scss" scoped></style>
