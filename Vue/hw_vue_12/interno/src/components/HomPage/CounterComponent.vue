<template>
  <section class="counter">
    <div class="counter__content">
      <div class="counter__item" v-for="(c, i) in arr" :key="i">
        <p>{{ c.count }}</p>
        <p class="counter__text">{{ c.name }}</p>
        <div class="counter__line" v-if="i < arr.length - 1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CounterComponent",

  data() {
    return {
      arr: [
        { count: 12, name: "Years Of Experiance" },
        { count: 85, name: "Success Project" },
        { count: 15, name: "Active Project" },
        { count: 95, name: "Happy Customers" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
