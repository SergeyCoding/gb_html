Vue.component('Blog', {
  props: { blogId: String },

  data() {
    return {
      currentBlog: {},
    };
  },

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

  template: `  
    <div class="bdp-blog">
      <p class="bdp-blog__caption">{{blogTitle}}</p>
      <div class="bdp-blog__content" v-html="blogContent" />    
    </div>`,
});
