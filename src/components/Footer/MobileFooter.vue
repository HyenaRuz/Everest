<template>
  <footer class="footer">
    <div class="footer__holder">
      <RouterLink :to="{ name: 'home' }">
        <img src="@/assets/img/Group_23.png" alt="" />
      </RouterLink>
      <div class="link">
        <a href="">
          <img src="@/assets/img/icon-twitter.png" alt="" />
        </a>
        <a href="">
          <img src="@/assets/img/icon-WhatsApp.png" alt="" />
        </a>
      </div>
      <div class="footer__control">
        <RouterLink :to="{ name: 'home' }">Главная</RouterLink>
        <RouterLink :to="{ name: 'aboutUs' }">О нас</RouterLink>
        <RouterLink :to="{ name: 'services' }">Услуги</RouterLink>
        <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>
      </div>
    </div>
    <p class="text">Everest Finance Group. Все права защищены @ 2021</p>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  padding-bottom: 50px;
  padding-top: 40px;

  &__holder {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: 50px;

    .link {
      margin-top: 30px;
      a + a {
        margin-left: 30px;
      }
    }
  }
  &__control {
    display: flex;
    gap: 50px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;

    a {
      color: var(--Dark, #1d1b1b);
      font-family: Gilroy;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.14px;
    }
  }
  .text {
    text-align: center;
    margin-top: 50px;
    color: #6f6e6e;
    font-family: Gilroy;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 114.8%; /* 16.072px */
    letter-spacing: 0.14px;
  }
}
</style>
