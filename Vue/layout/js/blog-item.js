const blogItem = new Vue({
  el: ".blog__list",
  data: {
    message: "Перевернуть",
  },
  methods: {
    revert: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
