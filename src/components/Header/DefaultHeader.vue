<template>
  <ModalWindow class="modalWindow" v-if="data.showModal" @closeModalWindow="closeModal" />
  <header class="header">
    <RouterLink :to="{ name: 'home' }">
      <img src="@/assets/img/Group_23.png" alt="" />
    </RouterLink>
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
import MyButton from '@/components/MyButton.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import { ref } from 'vue'


let data = ref({
  showModal: false
})

function openModal() {
  data.value.showModal = true
}

const closeModal = () => {
  data.value.showModal = false
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 74px;

  .header__control {
    display: flex;
    gap: 70px;
    line-height: normal;
    letter-spacing: 0.14px;
    height: 100%;
    align-items: center;
    
    a {
      color: var(--Dark, #1d1b1b);
      font-weight: 500;
      font-family: Gilroy;
      font-size: 1.4rem;
      font-style: normal;
      padding: 2px 12px;
      border-radius: 999px;

      &.router-link-active {

        &.router-link-exact-active {
          font-weight: 800;
          border: 1px solid black
        }
      }
    }
  }
}
</style>
