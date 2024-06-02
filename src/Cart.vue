<script setup>
import { store } from "./store.js"
import Header from "@/components/Header.vue";

function increaseQuantity(product) {
  store.increaseQuantity(product)
}

function decreaseQuantity(product) {
  store.decreaseQuantity(product)
}

function removeFromCart(product) {
  if (product) {
    store.removeFromCart(product)
  }
}
</script>

<template>
  <div id="Cart">
    <Header/>
    <div class="cart-header">
      <div class="cart-name-header">Корзина <span class="cart-numbers-products">{{ store.cart.length }}</span></div>
    </div>

<!--    <div class="empty-cart">-->
<!--      <img class="empty-cart-image" src="./image/empty-cart.png" alt="Empty cart">-->
<!--      <div class="empty-message">В корзине ничего нет</div>-->
<!--      <div class="empty-message-recommend">Воспользуйтесь поиском или перейдите в каталог, чтобы найти интересные товары</div>-->
<!--    </div>-->


    <div class="cart-products">
      <div class="cart-products-message">Товары в наличии</div>
      <div v-for="product in store.cart" :key="product.title" class="cart-item">
        <img :src="product.image" alt="Product Image" class="cart-product-image">
        <div class="cart-product-details">
          <h2>{{ product.title }}</h2>
          <p>Автор: {{ product.author }}</p>
          <p>Цена: {{ product.price }} ₽ </p>
          <p>Количество: {{ product.quantity }}</p>
          <div class="quantity-controls">
            <button @click="increaseQuantity(product)">+</button>
            <button @click="decreaseQuantity(product)">-</button>
          </div>
            <button @click="removeFromCart(product)">Удалить товар</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.cart-products {
  .cart-products-message {
    margin-left: 320px;
    padding-top: 30px;

    font-size: 20px;
  }

}



#Cart {
  background-image: conic-gradient(from 90deg at -10% 100%, #ccdbfb 0deg, #cde1ff 90deg,#fff 1turn)
}

.cart-header {
  display: flex;

  .cart-name-header {
    margin-left: 320px;
    padding-top: 60px;
    display: flex;

    font-size: 32px;
    line-height: 40px;

    font-weight: 600;
    letter-spacing: .02em;
    text-transform: uppercase;
  }

  .cart-numbers-products {
    color: #707783;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 16px;
    margin-top: 10px;
    text-transform: lowercase;
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