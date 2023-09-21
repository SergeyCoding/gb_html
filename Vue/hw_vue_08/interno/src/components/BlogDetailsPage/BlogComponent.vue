<template>
  <div class="bdp-blog">
    <p class="bdp-blog__caption">{{ blogTitle }}</p>
    <div class="bdp-blog__content" v-html="blogContent" />
  </div>
</template>

<script>
import { getBlogs } from '../../data/data.js';

export default {
  name: 'BlogComponent',

  props: {
    blogId: String,
  },

  data() {
    return { currentBlog: {} };
  },

  mounted() {},

  methods: {},

  computed: {
    blogTitle() {
      const curBlog = getBlogs().find((blog) => blog.blogId === this.blogId);
      return curBlog.title;
    },
    blogContent() {
      const curBlog = getBlogs().find((blog) => blog.blogId === this.blogId);
      return curBlog.content;
    },
  },
};
</script>

<style lang="scss" scoped></style>
