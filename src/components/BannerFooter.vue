<template>
  <div class="banner center">
    <div class="banner__info">
      <h3 class="banner__title">Начните зарабатывать уже сейчас</h3>
      <p class="banner__text">
        Оставьте заявку и наш менеджер свяжется с Вами в течении нескольких часов
      </p>
      <FormInput />
      <div class="banner__link">
        <p class="banner__title">
          Хотите связаться с нами раньше, чем мы Вам перезвоним? Пишите нам в мессенджер. Мы всегда
          на связи!
        </p>
        <div class="banner__links">
          <a href="#">
            <img src="../assets/img/icon-twitter.png" alt="" />
          </a>
          <a href="#">
            <img src="../assets/img/icon-WhatsApp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <img class="banner__picture" src="../assets/img/img-baner.png" alt="" />
  </div>
</template>

<script setup>
import FormInput from './formInput.vue'
</script>

<style lang="scss" scoped>
.banner {
  background: #f8f8f8;
  position: relative;
  padding-top: 75px;
  padding-bottom: 75px;

  &__picture {
    position: absolute;
    top: 93px;
    right: 101px;
  }
  &__title {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 52px;
      top: 16px;
      left: -70px;
      border-bottom: 2px solid #01d957;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%;
    padding-left: 70px;
    width: max-content;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      width: 387px;
      height: 43px;
      flex-shrink: 0;
      border-radius: 27px;
      background: var(--Green, #01d957);
      cursor: pointer;

      p {
        color: #fff;
      }
    }
  }
  &__input {
    width: 387px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #eeeded;
    background: #fbfbfb;
    padding: 16px 15px;

    color: #1d1b1b;
    font-family: Gilroy-Light;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.8%; /* 16.072px */
    letter-spacing: 0.14px;
    &::placeholder {
      color: #1d1b1b;
      font-family: Gilroy-Light;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 114.8%; /* 16.072px */
      letter-spacing: 0.14px;
    }
  }
  &__link {
    margin-left: 70px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__links {
    a + a {
      margin-left: 10px;
    }
  }
}
</style>
