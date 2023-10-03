<template>
  <div class="back-lines">
    <div class="back-line" :style="getStyle(i)" v-for="(x, i) in lineList" :key="`key${x}`"></div>
  </div>
</template>

<script>
export default {
  name: "BackLines",

  data() {
    return {
      lineList: [0, 400, 800, 1200],
      styleLeft: [{ left: 0 }, { left: 0 }, { left: 0 }, { left: 0 }],
    };
  },

  mounted() {},

  methods: {
    getStyle(x) {
      this.styleLeft[x].left = `calc((100% - 1200px) / 2 + ${this.lineList[x]}px)`;
      return this.styleLeft[x];
    },
  },
};
</script>

<style lang="scss" scoped></style>
