const blogItem = new Vue({
  el: '.blog__list',
  data: {
    blogs: [
      {
        img: './img/blog01.png',
        alt: 'blog1',
        text: 'Let’s Get Solution For Building Construction',
        text2: `Work`,
        data: '26 December,2022',
        isSelected: false,
      },
      {
        img: './img/blog02.png',
        alt: 'blog2',
        text: 'Low Cost Latest Invented Interior Designing',
        text2: `           Ideas.            `,
        data: '22 December,2022',
        isSelected: true,
      },
      {
        img: './img/blog03.png',
        alt: 'blog3',
        text: `
          Best For Any Office & Business Interior
          Solution
           `,
        data: '25 December,2022',
        isSelected: false,
      },
    ],
  },
  methods: {
    revert: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
  computed: {
    isSelected(v) {
      console.log('v', v);
      if (v) {
        return 'blog__item_selected';
      }
    },
  },
});
