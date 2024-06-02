<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {computed, ref} from "vue";

const products = ref([
  {
    image: "https://content.img-gorod.ru/nomenclature/29/261/2926100-1.jpg?width=200&height=280&fit=bounds",
    title: "Мастер и Маргарита",
    author: "М.А Булгаков",
    price: 309,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/24/652/2465295-3.jpg?width=200&height=280&fit=bounds",
    title: "Преступление и наказание",
    author: "Ф.М Достоевский",
    price: 329,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/25/121/2512180.jpg?width=200&height=280&fit=bounds",
    title: "Морфий",
    author: "М.А Булгаков",
    price: 269,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/24/804/2480417.jpg?width=200&height=280&fit=bounds",
    title: "Герой нашего времени",
    author: "М.Ю Лермонтов",
    price: 269,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/29/128/2912829.jpg?width=200&height=280&fit=bounds",
    title: "Вишневый сад",
    author: "А.П Чехов",
    price: 309,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/26/280/2628067-1.jpg?width=200&height=280&fit=bounds",
    title: "Белые ночи",
    author: "Ф.М Достоевский",
    price: 289,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/28/915/2891539.jpg?width=200&height=280&fit=bounds",
    title: "Идиот",
    author: "Ф.М Достоевский",
    price: 239,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/28/633/2863345-1.jpg?width=200&height=280&fit=bounds",
    title: "Братья Карамазовы",
    author: "Ф.М Достоевский",
    price: 296,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/24/590/2459099-1.jpg?width=200&height=280&fit=bounds",
    title: "Анна Каренина",
    author: "Л.Н Толстой",
    price: 268,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/24/673/2467384-1.jpg?width=200&height=280&fit=bounds",
    title: "Отцы и дети",
    author: "И.С Тургенев",
    price: 219,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/27/196/2719696.jpg?width=200&height=280&fit=bounds",
    title: "Собачье сердце",
    author: "М.А Булгаков",
    price: 219,
  },
  {
    image: "https://content.img-gorod.ru/nomenclature/24/957/2495747.jpg?width=200&height=280&fit=bounds",
    title: "Капитанская дочка",
    author: "А.С Пушкин",
    price: 209,
  },
]);


const props = defineProps(['searchQuery', 'sortOption'])

const filteredAndSortedProducts = computed(() => {
  let filteredProducts = products.value.filter(product =>
      product.title.toLowerCase().includes(props.searchQuery.toLowerCase())
  );

  switch (props.sortOption) {
    case 'По названию':
      return filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    case 'По цене (сначала дешевые)':
      return filteredProducts.sort((a, b) => a.price - b.price);
    case 'По цене (сначала дорогие)':
      return filteredProducts.sort((a, b) => b.price - a.price);
    default:
      return filteredProducts;
  }
});

</script>

<template>
  <div class="list">
    <ProductCard
        v-for="product in filteredAndSortedProducts"
        :key="product.title"
        :image="product.image"
        :title="product.title"
        :author="product.author"
        :price="product.price"/>
  </div>

</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin-top: 20px;
  padding-left: 300px;
}
</style>