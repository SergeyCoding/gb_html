Vue.component('Blog', {
  props: { blogId: String },

  data() {
    return {
      blogs: [
        {
          blogId: '101',
          title: 'Let’s Get Solution for Building Construction Work',
          content: `
            <div class="bdp-blog__img">
              <img src="./img/blog-details-img01.png" alt="" />
            </div>
            <div class="bdp-blog__date">
              <p>26 December,2022</p>
              <p>Interior / Home / Decore</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
              belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injecthumour, or randomised words which don't look even slightly
              believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary.
            </p>
            <div class="blog__quotes">
              <p>“</p>
              <p>The details are not the details. They make the design.</p>
            </div>
            `,
        },
        { blogId: '102', title: 'Design sprints are great', content: '' },
        { blogId: '103', title: 'title 103', content: 'content 103' },
        { blogId: '104', title: 'title 104', content: 'content 104' },
        { blogId: '105', title: 'title 105', content: 'content 105' },
        { blogId: '106', title: 'title 106', content: 'content 106' },
        { blogId: '107', title: 'title 107', content: 'content 107' },
        { blogId: '108', title: 'title 108', content: 'content 108' },
        { blogId: '109', title: 'title 109', content: 'content 109' },
        { blogId: '110', title: 'title 110', content: 'content 110' },
      ],

      currentBlog: {},
    };
  },

  computed: {
    blogTitle() {
      const curBlog = this.blogs.find((blog) => blog.blogId === this.blogId);
      return curBlog.title;
    },
    blogContent() {
      const curBlog = this.blogs.find((blog) => blog.blogId === this.blogId);
      return curBlog.content;
    },
  },

  // watch: {
  //   blogId(newValue, oldValue) {
  //     console.log('blog', newValue, oldValue);
  //     this.currentBlog = this.blogs.find((blog) => blog.blogId === this.blogId);
  //     console.log(this.currentBlog);
  //   },
  // },

  // created() {
  //   console.log('blog', 'created');
  //   console.log(this.blogs);
  //   this.currentBlog = this.blogs.filter((blog) => blog.blogId === this.blogId);
  //   console.log('blog this.currentBlog', this.currentBlog);
  // },

  template: `  
    <div class="bdp-blog">
      <p class="bdp-blog__caption">{{blogTitle}}</p>
      <div class="bdp-blog__content" v-html="blogContent" />    
    </div>`,
});
