<template>
  <div class="holder">
    <img class="holder__logo" src="../assets/img/Group 23.png" alt="" />
    <img class="holder__img" :src="props.picture" alt="" />
    <div class="holder__info">
      <RouterLink class="holder__title" :to="{ name: props.cardLink }">
        <slot name="title"></slot>
      </RouterLink>
      <!-- <h3 class="holder__title">
        <slot name="title"></slot>
      </h3> -->
      <p class="holder__text">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

let props = defineProps({
  picture: {
    String: ''
  },
  cardLink: {
    String: ''
  }
})
</script>

<style lang="scss" scoped>
.holder {
  width: 590px;
  height: 312px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 7px 40px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__img {
    display: block;
    position: absolute;
    top: 10px;
    right: 30px;
  }
  &__logo {
    display: block;
    height: 73px;
    width: 100px;
  }
  &__info {
    display: block;
  }
  &__title {
    color: var(--Green, #01d957);
    font-family: Gilroy-Light;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 114.8%; /* 27.552px */
    letter-spacing: 0.24px;
  }
  &__text {
    height: 48px;
    width: 410px;
    margin-top: 15px;
  }
}
</style>
