<template>
  <div class="bdp-blog">
    <p class="bdp-blog__caption">{{ blog.title }}</p>
    <div class="bdp-blog__content" v-html="blog.content" />
  </div>
</template>

<script>
export default {
  name: 'BlogComponent',

  props: {
    blog: { blogId: String, title: String, content: String, tags: [String] },
  },

  data() {
    return { currentBlog: {} };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
