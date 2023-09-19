Vue.component('BlogsList', {
  props: { tag: String },

  data() {
    return {
      //'Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', "Children's Room"
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

  computed: {
    showBlogs() {
      return this.blogs.filter((v) => v.tags.includes(this.tag)).slice(0, 3);
    },
  },

  template: '<div><blog :blogId="b.blogId" v-for="b in showBlogs" :key="b.blogId"  /></div>',
});
