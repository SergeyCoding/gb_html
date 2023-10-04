<template>
  <div class="switcher">
    <div class="circle"></div>
    <div class="circle selected"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "SwitcherComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.switcher {
  width: 126px;
  padding: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.circle {
  width: 10px;
  height: 10px;
  border: 1px solid #292f36;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}
.selected {
  background-color: black;
}
</style>
