<template>
  <div class="switcher">
    <div
      class="circle"
      v-for="i in [1, 2, 3]"
      :class="{ selected: switcherSelected === i }"
      @click="changePage(i)"
    ></div>
    <!-- <div class="circle selected"></div>
    <div class="circle"></div> -->
  </div>
</template>

<script>
export default {
  name: "SwitcherComponent",

  data() {
    return {
      switcherSelected: 1,
      interval: null,
      timeout: null,
    };
  },

  mounted() {
    this.StartSwith();
  },

  methods: {
    StartSwith() {
      this.interval = setInterval(() => {
        if (this.switcherSelected === 3) {
          this.switcherSelected = 1;
        } else {
          this.switcherSelected++;
        }
        this.$emit("switch", this.switcherSelected);
      }, 3000);
    },
    changePage(page) {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(this.StartSwith, 6000);

      this.switcherSelected = page;

      this.$emit("switch", this.switcherSelected);
    },
  },
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
