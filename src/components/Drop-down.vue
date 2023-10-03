<template>
  <div class="box">
    <h3
      class="box__question"
      @click.prevent="openAnswer"
      :class="{ 'box__question-open': isActive }"
    >
      {{ props.question }}
    </h3>
    <p class="box__answer" :class="{ 'box__answer-open': isActive }">{{ props.answer }}</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  question: { String },
  answer: { String }
})

let isActive = ref(false)
const openAnswer = () => {
  if (isActive.value == false) {
    isActive.value = true
  } else {
    isActive.value = false
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 21px 0 21px 0;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;

  &__question {
    font-size: 1.7rem;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      width: 23px;
      height: 0px;
      top: 10px;
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
      top: 10px;
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
  &__answer {
    pointer-events: none;
    opacity: 0;
    height: 0;
    position: absolute;
    transition: all 300ms;
    overflow: hidden;

    &-open {
      overflow: hidden;
      position: relative;
      opacity: 1;
      height: max-content;
      transition: all 300ms;
    }
  }
}
</style>
