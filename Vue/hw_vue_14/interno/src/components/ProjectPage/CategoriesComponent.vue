<template>
  <div class="container">
    <div class="frame">
      <div v-for="(c, i) in categories" :key="i">
        <div :class="isSelected(i)" @click="select(i)">
          <p>{{ c }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesComponent",

  data() {
    return {
      categories: ["Bathroom", "Bed Room", "Kitchen", "Living Area"],
      selected: 1,
    };
  },

  mounted() {
    this.select(this.selected);
  },

  methods: {
    isSelected(index) {
      return index === this.selected ? "button" : "text";
    },
    select(index) {
      this.selected = index;
      this.$emit("change-category", this.categories[this.selected]);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@use "./../../scss/vars";
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  justify-content: center;

  color: vars.$text-caption-color;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}
.frame {
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 96px;
  border: 1px solid vars.$gold-color;
  border-radius: 18px;
  padding-left: 96px;
  padding-right: 96px;
}
.button {
  padding: 26px 66px;
  background-color: vars.$gold-color;
  border-radius: 18px;
}

.text {
  padding: 5px;
  cursor: pointer;
}
</style>
