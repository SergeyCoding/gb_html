<template>
  <div class="back-lines">
    <div
      class="back-line"
      :style="{ left: `calc((100% - 1200px) / 2 + ${x}px)` }"
      v-for="x in lineList"
      :key="`key${x}`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'BackLines',

  data() {
    return {
      lineList: [0, 400, 800, 1200],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
