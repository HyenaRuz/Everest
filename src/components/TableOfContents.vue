<template>
  <div class="holder">
    <AmBreadcrumbs class="holder__amBreadcrumbs" />
    <img :src="props.backgroundImg" alt="" />
    <div class="holder__info">
      <p class="holder__title">
        <slot name="title"></slot>
      </p>
      <p class="holder__text">
        <slot name="text"></slot>
      </p>
      <MyButton>Узнать подробнее</MyButton>
    </div>
  </div>
</template>

<script setup>
import AmBreadcrumbs from './AmBreadcrumbs.vue';
import MyButton from './MyButton.vue'

let props = defineProps({
  backgroundImg: {}
})
</script>

<style lang="scss" scoped>
.holder {
  background-repeat: no-repeat;
  height: 501px;
  display: flex;
  justify-content: center;
  position: relative;

  &__amBreadcrumbs{
    position: absolute;
    top: 20px;
    left: 0;
  }
  img {
    display: block;
    position: absolute;
    z-index: -10;
    align-items: center;
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
  &__title {
    color: var(--white, #fff);
    font-family: Gilroy-Light;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 114.8%; /* 57.4px */
    letter-spacing: 0.5px;
    max-width: 711px;
  }
  &__text {
    color: var(--white, #fff);
    width: 590px;
  }
}
</style>
