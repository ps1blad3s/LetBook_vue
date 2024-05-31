<script setup>
import { ref, onMounted } from "vue"

const headerRef = ref(null);
let prevScrollPosition = window.pageYOffset

const handleScroll = () => {
  const currentScrollPositon = window.pageYOffset

  if(prevScrollPosition > currentScrollPositon) {
    headerRef.value.classList.remove('scrolled')
  } else {
    headerRef.value.classList.add('scrolled')
  }

  prevScrollPosition = currentScrollPositon
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <header ref="headerRef">
    <div class="logo"><img src="../image/logo.svg" width="30" height="30" alt=""><span class="logo-text">LetBooks</span></div>
    <div class="menu">
      <p class="menu-item-catalog">Каталог</p>
      <p class="menu-item-cart">Корзина</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    justify-content: space-between;
    align-content: center;
    padding: 50px;
    background-image: conic-gradient(from 90deg at -10% 100%, #ccdbfb 0deg, #cde1ff 90deg,#fff 1turn);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    .logo {
      font-size: 30px;
      margin-left: 200px;
      cursor: pointer;

      .logo-text {
        margin-left: 5px;
      }
    }

    .menu {
      display: flex;
      justify-content: center;
      margin-right: 200px;
      margin-top: 5px;
      font-size: 20px;

      .menu-item-catalog,
      .menu-item-cart {

        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;

        color: black;
        transition: 0.3s;

          &:hover {
            color: grey;
          }
      }

    }
}

  .scrolled {
    transform: translateY(-5px) scale(0.90);
  }

</style>