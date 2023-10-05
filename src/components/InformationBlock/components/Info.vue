<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="info">
    <h3 class="info__title" :style="{ width: props.widthTitle + 'px' }">
      {{ dataInfo.title }}
      <slot></slot>
    </h3>
    <div class="info__holderText" v-for="(text, index) in dataInfo.text" :key="index">
      <p class="info__text">{{ text }}</p>
    </div>
    <MyButton v-if="props.button" :defaultButton="true"> Читать больше </MyButton>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'

let props = defineProps({
  button: {
    Boolean: false
  },
  widthTitle: {
    Number
  },
  data: {
    Object
  }
})

let dataInfo = { ...props.data }

// console.log(props.data)
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: min-content;

  &__title {
    &::before {
      content: '';
      position: absolute;
      top: 16px;
      left: -72px;
      border-bottom: 2px solid #01d957;
      width: 52px;
    }
  }
  &__holderText {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 475px;
  }
  // &__text {

  // }
}
</style>
