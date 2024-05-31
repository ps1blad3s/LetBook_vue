<script setup>
import Header from "@/components/Header.vue";
import { ref } from "vue";

const page = ref('Cart');
</script>

<template>
  <div id="Cart">
    <Header/>
    <div class="cart-header">
      <div class="cart-name-header">Корзина</div>
    </div>

    <div class="empty-cart">
      <img class="empty-cart-image" src="./image/empty-cart.png" alt="Empty cart">
      <div class="empty-message">В корзине ничего нет</div>
      <div class="empty-message-recommend">Воспользуйтесь поиском или перейдите в каталог, чтобы найти интересные товары</div>
    </div>

  </div>
</template>

<style scoped lang="scss">
#Cart {
  background-image: conic-gradient(from 90deg at -10% 100%, #ccdbfb 0deg, #cde1ff 90deg,#fff 1turn)
}

.cart-header {
  display: flex;

  .cart-name-header {
    width: 160px;
    height: 100px;
    margin-left: 320px;
    padding-top: 60px;
    display: flex;

    font-size: 32px;
    line-height: 40px;

    font-weight: 600;
    letter-spacing: .02em;
    text-transform: uppercase;
  }
}

.empty-cart {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .empty-message {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 16px;
    text-align: center
  }

  .empty-message-recommend {
    width: 350px;
    height: 48px;
    color: #707783;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
}

</style>