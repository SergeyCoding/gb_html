Vue.component('BlogDetails', {
  props: {},

  data() {
    return {
      currentTag: '',
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', "Children's Room"],
    };
  },

  methods: {
    setCurrentTag(v) {
      this.currentTag = v;
    },
  },

  created() {
    this.currentTag = this.tags[0];
  },

  template: `
        <div class="bdp-blog-details">
            <div class="bdp-blog-list">
              <blogs-list :tag="currentTag"></blogs-list>
            </div>
            <div class="bdp-blog-tags">
                <p>Tags</p>
                <button class="bdp-blog-tags__btn" :class="currentTag===btntag?'bdp-blog-tags__btn_active':''" @click="setCurrentTag(btntag)" v-for="(btntag) in tags" :key="btntag">{{btntag}}</button>
            </div>
        </div>
        `,
});

const app = new Vue({
  el: '.blog-details-page',
});
