<script setup>
import Header from "@/components/Header.vue";
import Catalog from "@/components/Catalog.vue";
import Cart from "@/Cart.vue";

</script>

<template>
  <div id="App">
    <Header />
    <Catalog />
<!--<Cart/>-->
  </div>
</template>

<style scoped lang="scss">
#App {
  background-image: conic-gradient(from 90deg at -10% 100%, #ccdbfb 0deg, #cde1ff 90deg,#fff 1turn)
}
</style>
