<template>
  <footer class="footer">
    <div class="footer__holder">
      <RouterLink :to="{ name: 'home' }">
        <img src="@/assets/img/Group_23.png" alt="" />
      </RouterLink>
      <div class="footer__control">
        <RouterLink :to="{ name: 'home' }">Главная</RouterLink>
        <RouterLink :to="{ name: 'aboutUs' }">О нас</RouterLink>
        <RouterLink :to="{ name: 'services' }">Услуги</RouterLink>
        <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>
        <a href="">Политика конфиденциальности</a>
      </div>
      <div class="link">
        <a href="">
          <img src="@/assets/img/icon-twitter.png" alt="" />
        </a>
        <a href="">
          <img src="@/assets/img/icon-WhatsApp.png" alt="" />
        </a>
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

  .footer__holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cfcfcf;

    .footer__control {
      display: flex;
      gap: 70px;
      margin: 53px 0 63px 0;

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
    .link {
      a + a {
        margin-left: 10px;
      }
    }
  }
  .text {
    text-align: center;
    margin: 40px 0 40px 0;
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
