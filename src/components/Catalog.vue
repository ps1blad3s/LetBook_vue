<script setup>

import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <div class="catalog-name">Каталог
<!--    <div class="search">-->
<!--      <input type="text" placeholder="Поиск...">-->
<!--    </div>-->
  </div>


  <ProductList/>
</template>

<style scoped lang="scss">
.catalog-name {
  margin-left: 320px;
  padding-top: 60px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  font-size: 32px;
  line-height: 40px;

  font-weight: 600;
  letter-spacing: .02em;
  text-transform: uppercase;


}
.search {

display: flex;
flex-direction: column-reverse;
  margin-right: 370px;

}

</style>