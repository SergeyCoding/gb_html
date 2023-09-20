<template>
  <div class="body-content">
    <BackLines></BackLines>
    <slot></slot>
  </div>
</template>

<script>
import BackLines from './BodyContent/BackLinesComponent.vue';

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

<style lang="scss" scoped></style>
