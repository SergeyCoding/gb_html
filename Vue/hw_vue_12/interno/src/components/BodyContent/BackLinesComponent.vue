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
      style0: { left: 0 },
      style1: { left: 0 },
      style2: { left: 0 },
      style3: { left: 0 },
      lineList: [0, 400, 800, 1200],
    };
  },

  mounted() {},

  methods: {
    getStyle(x) {
      console.log(x);
      if (x === 0) {
        this.style0.left = `calc((100% - 1200px) / 2 + ${this.lineList[x]}px)`;
        return this.style0;
      }

      if (x === 1) {
        this.style1.left = `calc((100% - 1200px) / 2 + ${this.lineList[x]}px)`;
        return this.style1;
      }

      if (x === 2) {
        this.style2.left = `calc((100% - 1200px) / 2 + ${this.lineList[x]}px)`;
        return this.style2;
      }

      if (x === 3) {
        this.style3.left = `calc((100% - 1200px) / 2 + ${this.lineList[x]}px)`;
        return this.style3;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
