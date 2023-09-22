<template>
  <div class="info">
    <h3 class="info__title" :style="{width: props.widthTitle + 'px'}">
      <slot name="title"></slot>
    </h3>
    <div class="info__holderText" v-if="$slots.text1">
      <p class="info__text" v-if="$slots.text1">
        <slot name="text1"></slot>
      </p>
      <p class="info__text" v-if="$slots.text2">
        <slot name="text2"></slot>
      </p>
      <p class="info__text" v-if="$slots.text3">
        <slot name="text3"></slot>
      </p>
    </div>
    <MyButton v-if="props.button"> Читать больше </MyButton>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import MyButton from './MyButton.vue'

let props = defineProps({
  button: {
    Boolean: false
  },
  widthTitle:{
    Number,
  }
})
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
    width: 520px;
  }
  // &__text {

  // }
}
</style>
