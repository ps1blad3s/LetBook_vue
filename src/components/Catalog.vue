<script setup>
import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <div class="header-wrapper">
    <div class="catalog-name">Каталог</div>

    <div class="filter-wrapper-header">
    </div>
    <div class="filter-wrapper">
      <select class="filter-select">
        <option>По названию</option>
        <option>По цене (сначала дешевые)</option>
        <option>По цене (сначала дорогие)</option>
      </select>
    </div>

    <div class="search-cl">
      <img class="search-icon" src="../image/search.svg"/>
      <input class="search-input" placeholder="Хочу найти...">
    </div>
  </div>
  <ProductList/>
</template>

<style scoped lang="scss">
.filter-wrapper {
  margin-top: 60px;
  margin-left: 37em;

  .filter-select {
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    padding: 0.45rem 0.5rem ;
    outline: none;
  }
}



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
  margin-right: 330px;
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