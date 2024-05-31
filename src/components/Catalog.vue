<script setup>
import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <div class="header-wrapper">
    <div class="catalog-name">Каталог</div>
    <div class="search-cl">
      <img class="search-icon" src="../image/search.svg"/>
      <input class="search-input" placeholder="Хочу найти...">
    </div>
  </div>
  <ProductList/>
</template>

<style scoped lang="scss">
.search-icon {
  position: absolute;
  padding-top: 8px;
  padding-left: 10px;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-cl {
  margin-right: 400px;
  margin-top: 60px;
  position: relative;
}

.search-input {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 2rem;
  outline: none;

  &:focus {
    border-color: #9ca3af;
  }
}

.catalog-name {
  margin-left: 320px;
  padding-top: 60px;

  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: .02em;
  text-transform: uppercase;
}
</style>