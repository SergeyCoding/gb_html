<template>
  <div id="app">
    <h1>Homework 10</h1>
    <p>
      Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails".
      Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности. Внутри
      компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект
      должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на
      доступность продукта). Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать
      форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно
      вернуть строку "$99.99". В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и
      статус доступности. Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
    </p>

    <div class="product-details">
      <ProductDetails :currency="currency" />
    </div>

    <div>
      <select v-model="currency">
        <option value="RUB">рубли</option>
        <option value="USD">доллары</option>
        <option value="EUR">евро</option>
      </select>
    </div>
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';

export default {
  name: 'App',
  components: { ProductDetails },
  data() {
    return {
      currency: 'RUB',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  width: 80%;
  margin: 0 auto;
  text-align: justify;
  line-height: 140%;
}
.product-details {
  margin: 30px auto;
  width: 400px;
}
</style>
