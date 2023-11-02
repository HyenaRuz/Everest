<template>
  <DefaultLayout :padding="false">
    <div class="contact">
      <img class="contact__img" src="../assets/img/img-contacts.png" alt="" v-if="width >= 1250" />
      <div class="contact__holder">
        <h3 class="contact__title">Контакты</h3>
        <div class="contact__address">
          <div>
            <p class="contact__addressName">ПОЧТА</p>
            <p>everestfinance@com</p>
          </div>
          <div>
            <p class="contact__addressName">АДРЕС</p>
            <p>г. Москва, ул. Строителей 18б</p>
          </div>
          <div>
            <p class="contact__addressName">МЕССЕНДЖЕРЫ</p>
            <div class="contact__link">
              <a href="#"><img src="../assets//img/icon-WhatsApp.png" alt="" /></a>
              <a href="#"><img src="../assets//img/icon-twitter.png" alt="" /></a>
            </div>
          </div>
        </div>

        <div class="contact__form">
          <p class="contact__formTitle">
            Оставьте заявку и наш менеджер свяжется с Вами в течении нескольких часов
          </p>
          <FormInput />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import FormInput from '../components/formInput.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import {useResizeWidth} from '@/composables/useResizeWidth'

let {width} = useResizeWidth();
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  &__img {
    position: absolute;
    top: 0;
    right: calc(50vw + 50px);
  }
  &__link {
    display: flex;
    gap: 10px;
  }
  &__holder {
    display: flex;
    flex-direction: column;
    width: 590px;
    padding-top: 55px;
    padding-bottom: 94px;
    gap: 80px;
    align-items: center;
    position: relative;
  }
  &__title {
    margin-left: 70px;
    position: relative;
    align-self: self-start;

    &::before {
      content: '';
      position: absolute;
      top: 16px;
      left: -70px;
      border-bottom: 2px solid #01d957;
      width: 52px;
    }
  }
  &__address {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__addressName {
    margin-bottom: 15px;
    font-weight: 900;
    color: #d2d2d2;
    letter-spacing: 1.05px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min-content;
  }
  &__formTitle {
    margin-bottom: 22px;
    padding-left: 70px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 7px;
      left: -0px;
      border-bottom: 2px solid #01d957;
      width: 52px;
    }
  }
}


@media  screen and (max-width: 1250px){
  .contact{
    justify-content: center
  }
  .contact__img{
    display: none;
  }
}

</style>
