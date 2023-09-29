<template>
  <div class="holder " :style="{ height: props.height + 'px'}">
    <img :src="props.backgroundImg" alt="" />
    <div class="holder__info center">
      <!-- <AmBreadcrumbs class="holder__amBreadcrumbs" /> -->
      <h2 class="holder__title">
        {{ props.data.title }}
      </h2>
      <div class="holder__texts"  v-for="(text, index) in props.data.text" :key="index">
        <p class="holder__text">{{ text }}</p>
      </div>
      <MyButton :defaultButton="true" v-if="batton.isActive">{{ batton.text }}</MyButton>
    </div>
  </div>
</template>

<script setup>
// import AmBreadcrumbs from './AmBreadcrumbs.vue'
import MyButton from './MyButton.vue'

let props = defineProps({
  backgroundImg: {},
  batton:{
    text:'',
    isActive: false,
  }.required = false,
  data: {
    Object
  }
})
</script>

<style lang="scss" scoped>
.holder {
  display: flex;
  justify-content: center;
  position: relative;

  &__amBreadcrumbs {
    position: absolute;
    top: 20px;
  }
  img {
    display: block;
    z-index: -10;
    align-items: center;
  }
  &__info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    position: absolute;
  }
  &__title {
    max-width: 711px;
  }
  &__text {
    color: var(--white, #fff);
    width: 590px;
  }
}
</style>
