<template>
  <ModalWindow class="modalWindow" v-show="data.showModal" @closeModalWindow="closeModal" />
  <header class="header">
    <img src="../assets/img/Group 23.png" alt="" />
    <nav class="header__control">
      <RouterLink :to="{ name: 'home' }">Главная</RouterLink>
      <RouterLink :to="{ name: 'aboutUs' }">О нас</RouterLink>
      <RouterLink :to="{ name: 'services' }">Услуги</RouterLink>
      <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>
    </nav>
    <MyButton @executeMethod="openModal">Обратный звонок</MyButton>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MyButton from './MyButton.vue'
import ModalWindow from '../components/ModalWindow.vue'
import { ref } from 'vue'

let data = ref({
  showModal: false
})

function openModal() {
  data.value.showModal = true
}

const closeModal = (value) => {

  console.log(value)
  if(value) {
    let goBack = confirm("your changes will not be saved");
    if(goBack) {
      data.value.showModal = false
    }
  } else {
    data.value.showModal = false
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .header__control {
    display: flex;
    gap: 70px;
    margin: 29px 0 29px 0;

    a {
      color: var(--Dark, #1d1b1b);
      font-family: Gilroy-Light;
      font-size: 1.4rem;
      font-style: normal;
    }
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.14px;
  }
}
</style>
