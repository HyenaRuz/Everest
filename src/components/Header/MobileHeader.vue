<template>
    <ModalWindow class="modalWindow" v-if="data.showModal" @closeModalWindow="closeModal" />
    <header class="header">
      <RouterLink :to="{ name: 'home' }">
        <img class="header__logo" src="@/assets/img/Group_23.png" alt="" />
      </RouterLink>
      <div class="header__control">
          <MyButton @executeMethod="openModal" :circle="true"><img src="@/assets/img/icon-callBack.png" alt=""></MyButton>
          <BurgerMenu @execute-method="data.isActive = !data.isActive"/>
      </div>
    </header>
    <div class="header__navigationMenu" :style="menuStyle">
        <nav class="header__navigation"  :style="contentStyle">
        <RouterLink :to="{ name: 'home' }">Главная</RouterLink>
        <RouterLink :to="{ name: 'aboutUs' }">О нас</RouterLink>
        <RouterLink :to="{ name: 'services' }">Услуги</RouterLink>
        <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  import MyButton from '@/components/MyButton.vue'
  import ModalWindow from '@/components/ModalWindow.vue'
  import { ref, computed } from 'vue'
  import BurgerMenu from '@/components/BurgerMenu.vue'
  
  let data = ref({
    showModal: false,
    isActive: false,
  })
  
  function openModal() {
    data.value.showModal = true
  }
  
  const closeModal = () => {
    data.value.showModal = false
  }
  
  const menuStyle = computed(() => {
    return { 'max-height': data.value.isActive ? '764px' : 0, 'opacity': data.value.isActive ? '1' : 0, 'z-index': data.value.isActive ? '100' : '-1000' }
  })
  const contentStyle = computed(() => {
    return {'opacity': data.value.isActive ? '1' : 0}
  })
  </script>
  
  <style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 60px;
    &__logo{
      width: 52px;
    }
    &__navigationMenu{
      position: absolute;
      background-color: white;
      max-height: 0px;
      width: 100%;
      height: 100%;
      z-index: 100;
      top: 60px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 0;

      transition: max-height 0.3s ease-out;
      transition: opacity 0.3s ease-out;
    }
    &__navigation{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 70px;
        a {
            color: var(--Dark, #1d1b1b);
            font-weight: 600;
            font-family: Gilroy;
            font-size: 1.7rem;
            font-style: normal;
            padding: 2px 12px;
            border-radius: 999px;
        }
    }
    &__control {
      display: flex;
      gap: 34px;
      height: 100%;
      align-items: center;
    }
  }
  </style>
  