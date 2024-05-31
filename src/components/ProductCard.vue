<script setup>
import {ref} from "vue";

const props = defineProps({
  image: String,
  title: String,
  author: String,
  price: Number,
})

const addProduct = ref(true);

function clickAddProduct() {
  addProduct.value = !addProduct.value
}

</script>

<template>
  <div class="product-card">
    <img :src="props.image" alt="Product Image" class="product-image">
    <h2 class="product-name">{{ props.title }}</h2>
    <p class="product-description">Автор: {{ props.author }}</p>
    <p class="product-price">Цена: {{props.price}}</p>
    <button class="buy-button" @click.prevent="clickAddProduct" v-if="addProduct">Добавить в корзину</button>
    <button class="isAdd-button" @click.prevent="clickAddProduct" v-else>Добавлено в корзину</button>
  </div>
</template>
 
<style scoped lang="scss">
.product-card {
  margin: 20px 0 10px 20px;
  width: 300px;
  border: 0.5px solid #efefef;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;

  &:hover {
    transform: translateY(-1.3px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .product-price {
    padding: 10px;
    font-size: 0.9em;
    color: #666;

  }

  .product-image {
    margin-top: 6px;
    width: 45%;
    height: 200px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-name {
    padding: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-description {
    padding: 10px;
    font-size: 0.9em;
    color: #666;
  }

  .buy-button {
    padding: 8px 20px;

    background-color: #26a9e0;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 10px;

    &:hover {
      background-color: #175b8f;
    }
  }

  .isAdd-button {
    padding: 8px 20px;

    background-color: #37b856;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 10px;

    &:hover {
      background-color: #175b8f;
    }
  }
}
</style>