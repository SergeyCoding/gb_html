<template>
  <div class="pagination">
    <div class="pagination__item" v-for="(item, index) in items" :key="index">
      <div class="pagination__number">
        <p>{{ item.page }}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        v-if="item.type === 'current'"
      >
        <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        v-if="item.type === 'normal'"
      >
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        v-if="item.type === 'next'"
      >
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path
          d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    totalPages: Number,
    inPage: Number,
    outPage: Number,
  },

  data() {
    return {};
  },

  mounted() {},
  computed: {
    items() {
      console.log("this.inPage", this.inPage);
      if (this.totalPages <= 5) {
        const result = [];
        for (let i = 1; i <= this.totalPages; i++) {
          if (i === this.inPage) {
            result.push({ page: "0" + i, type: "current" });
          } else {
            result.push({ page: "0" + i, type: "normal" });
          }
        }
        return result;
      }
      return [
        { page: "01", type: "current" },
        { page: "02", type: "normal" },
        { page: "", type: "next" },
      ];
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
