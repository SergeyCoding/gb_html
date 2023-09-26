<template>
  <div>
    <p class="caption">Product Details</p>
    <p class="name">Название: "{{ product.name }}"</p>
    <p class="price">Цена: <span v-html="formattedPrice"></span></p>
    <p class="available" v-if="product.available">Available</p>
    <p class="out-of-stock" v-else>Out of stock</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  props: {
    currency: String,
  },

  data() {
    return {
      product: { name: 'название продукта', price: 1234.56, available: true },
    };
  },

  computed: {
    formattedPrice() {
      switch (this.currency) {
        case 'EUR':
          return '&euro;' + this.product.price;
        case 'RUB':
          return this.product.price + ' р.';
        case 'USD':
          return '$' + this.product.price;

        default:
          return this.product.price + ' руб. ';
      }
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  min-width: 100px;
  min-height: 100px;
  border: 1px solid salmon;
  background-color: beige;
  border-radius: 10px;
  padding: 15px;
}
.caption {
  text-align: center;
  margin-bottom: 15px;
}
.available {
  color: green;
}
.out-of-stock {
  color: red;
}

p {
  margin-top: 10px;
}
</style>
