<template>
  <div>
    <BlogComponent :blogId="b.blogId" v-for="b in showBlogs" :key="b.blogId" />
  </div>
</template>

<script>
import BlogComponent from './BlogComponent.vue';

export default {
  name: 'BlogListComponent',

  props: {
    tag: String,
  },

  data() {
    return {
      blogs: [
        { blogId: '101', tags: ['Kitchen'] },
        { blogId: '102', tags: ['Kitchen'] },
        { blogId: '103', tags: ['Bedroom'] },
        { blogId: '104', tags: ['Bedroom'] },
        { blogId: '105', tags: ['Building', 'Bedroom'] },
        { blogId: '106', tags: ['Architecture'] },
        { blogId: '107', tags: ['Kitchen Planning'] },
        { blogId: '108', tags: ['Kitchen Planning'] },
        { blogId: '109', tags: ["Children's Room"] },
        { blogId: '110', tags: ["Children's Room"] },
      ],
    };
  },

  mounted() {},

  methods: {},

  components: { BlogComponent },

  computed: {
    showBlogs() {
      return this.blogs.filter((v) => v.tags.includes(this.tag));
    },
  },
};
</script>

<style lang="scss" scoped></style>
