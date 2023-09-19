Vue.component('BlogsList', {
  props: { tag: String },
  name: 'blogs-list',

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
      curTag: '',
      showBlogs: [],
    };
  },

  methods: {
    showBlogsUpdate() {},
    printShowBlogs() {
      this.showBlogs.forEach((element) => {
        console.log('showBlogs: ', element.blogId, element.tags);
      });
    },
  },

  watch: {
    tag(newValue, oldValue) {
      console.log(newValue, oldValue);
      this.curTag = this.tag;
      this.showBlogs = this.blogs.filter((v) => v.tags.includes(this.curTag)).slice(0, 3);
      this.printShowBlogs();
    },
  },

  created() {
    console.log('created');
    this.curTag = this.tag;
    console.log(this.blogs);
    this.showBlogs = this.blogs.filter((v) => v.tags.includes(this.curTag)).slice(0, 3);
    console.log(this.showBlogs);
  },

  activated() {
    console.log('activated');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
    this.curTag = this.tag;
    this.showBlogs = this.blogs.filter((v) => v.tags.includes(this.curTag)).slice(0, 3);
    this.printShowBlogs();
  },

  template: '<div><blog :blogId="b.blogId" v-for="b in showBlogs" :key="b.blogId"  /></div>',
});
