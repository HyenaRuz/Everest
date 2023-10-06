<template>
  <div class="box">
    <h3
      class="box__question"
      @click="isActive = !isActive"
      :class="{ 'box__question-open': isActive }"
    >
      {{ title }}
    </h3>
    <div :style="contentStyle" class="box__content">
      <p :style="infoStyle" class="box__answer">{{ info }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'

defineProps({
  title: { String },
  info: { String }
})

let isActive = ref(false)

const contentStyle = computed(() => {
  return { 'max-height': isActive.value ? '100px' : 0 }
})

const infoStyle = computed(() => {
  return { opacity: isActive.value ? 1 : 0 }
})
</script>

<style lang="scss" scoped>
.box {
  padding: 21px 0 21px 0;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  // gap: 30px;

  &__question {
    font-size: 1.7rem;
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 23px;
      height: 0px;
      top: 50%;
      right: 0;
      border-bottom: 2px solid #01d957;
      border-radius: 9999px;
      transition: all 300ms;
    }
    &::before {
      content: '';
      position: absolute;
      width: 23px;
      height: 0px;
      top: 50%;
      right: 0;
      border-bottom: 2px solid #01d957;
      border-radius: 9999px;
      transform: rotate(-90deg);
      transition: all 300ms;
    }
    &-open {
      &::after {
        transform: rotate(45deg);
        transition: all 300ms;
      }
      &::before {
        transform: rotate(-45deg);
        transition: all 300ms;
      }
    }
  }

  &__content {
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }
  &__answer {
    margin-top: 30px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
}
</style>
