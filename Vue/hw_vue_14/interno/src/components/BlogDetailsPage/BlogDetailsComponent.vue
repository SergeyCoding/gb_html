<template>
  <div class="bdp-blog-details">
    <div class="bdp-blog-list">
      <BlogListComponent :tag="currentTag"></BlogListComponent>
    </div>
    <div class="bdp-blog-tags">
      <p>Tags</p>
      <button
        class="bdp-blog-tags__btn"
        :class="currentTag === btntag ? 'bdp-blog-tags__btn_active' : ''"
        @click="setCurrentTag(btntag)"
        v-for="btntag in tags"
        :key="btntag"
      >
        {{ btntag }}
      </button>
    </div>
  </div>
</template>

<script>
import { getTags } from '../../data/data';
import BlogListComponent from './BlogListComponent.vue';

export default {
  name: 'BlogDetailsComponent',

  data() {
    return {
      currentTag: '',
      // tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', "Children's Room"],
      tags: [],
    };
  },

  components: { BlogListComponent },

  mounted() {
    this.tags = getTags();
    this.currentTag = this.tags[0];
  },

  methods: {
    setCurrentTag(v) {
      this.currentTag = v;
    },
  },
};
</script>

<style lang="scss" scoped></style>
