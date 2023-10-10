<template>
  <div class="faq center">
    <p class="faq__subject">FAQ</p>
    <h3 class="faq__title">Часто задаваемые вопросы</h3>
    <ul class="faq__questions">
      <DropDown
        v-for="question in questions"
        :key="question.id"
        :title="question.title"
        :info="question.info"
      />
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import DropDown from './DropDown.vue'

defineProps({
  questions: {
    Array
  }
})
</script>

<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__subject {
    color: #d2d2d2;
  }
  &__title {
    width: 295px;
    margin-top: 20px;
  }
  &__questions {
    width: 794px;
    margin-top: 65px;
  }
  &__box {
    padding: 21px 0 21px 0;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__question {
    font-size: 1.7rem;

    &::after {
      content: '';
      position: absolute;
      width: 23px;
      height: 0px;
      top: 10px;
      right: 0;
      border-bottom: 2px solid #01d957;
      border-radius: 9999px;
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
    }
  }
}
</style>
