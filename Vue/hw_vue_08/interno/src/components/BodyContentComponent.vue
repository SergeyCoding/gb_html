<script>
import BackLines from './BackLinesComponent.vue';

export default {
  name: 'BodyContent',

  data() {
    return {};
  },
  components: { BackLines },

  mounted() {},

  methods: {},
};
</script>

<template>
  <div class="body-content">
    <BackLines></BackLines>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
