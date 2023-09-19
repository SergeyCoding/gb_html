Vue.component('BlogsList', {
  props: ['tag'],
  name: 'blogs-list',

  data() {
    return {
      //'Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', "Children's Room"
      blogs: [
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Kithen'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Kithen'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Bedroom'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Bedroom'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Building'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Architecture'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Kitchen Planning'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ['Kitchen Planning'] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ["Children's Room"] },
        { blog: { title: 'Design sprints are great', content: '<div>content</div>' }, tags: ["Children's Room"] },
      ],
    };
  },

  // template: '<div>{{blogs[0].blog.title}}</div>',
  template: '<div>{{tag}}</div>',
});
