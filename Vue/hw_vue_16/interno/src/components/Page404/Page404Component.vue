<template>
  <div class="main404">
    <div class="main404__left">
      <div class="main404__content">
        <h1>404</h1>
        <p>We are sorry, but the page you requested was not found</p>
        <router-link to="home" tag="button" class="main__button">
          <p class="main404__btn">Back To Home</p>
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              id="Vector"
              d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="main404__right">
      <img src="@/assets/img/404.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404Component',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.main404 {
  margin-top: 53px;
  padding-bottom: 50px;
  display: flex;

  &__left {
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  &__content {
    width: 600px;

    > h1 {
      color: #cda274;
      font-family: DM Serif Display;
      font-size: 250px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 312.5px */
    }

    > p {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 52.5px */
      letter-spacing: 0.35px;
    }
  }

  &__btn {
    color: #fff;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }

  &__right {
    width: 50%;
    max-height: 913px;
    border-radius: 0 0 0 353px;
    overflow: hidden;
  }
}
</style>
