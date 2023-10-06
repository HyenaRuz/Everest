<template>
  <form class="formInput" action="" @submit.prevent="checkForm">
    <input
      class="formInput__input"
      id="name"
      type="text"
      placeholder="Ваше имя"
      :value="name"
      @input="emitValue"
    />
    <input
      class="formInput__input"
      id="email"
      type="email"
      placeholder="Почта"
      :value="email"
      @input="emitValue"
    />
    <input
      class="formInput__input"
      id="phone"
      type="tel"
      placeholder="Телефон(необязательно)"
      :value="phone"
      @input="emitValue"
    />
    <button type="submit"><p>Отправить</p></button>
  </form>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  name: String,
  email: String,
  phone: String
})
const emit = defineEmits(['update:phone', 'update:email', 'update:name'])

let client = {
  name: '',
  email: '',
  phone: ''
}

const emitValue = (e) => {
  let value = e.target.value

  console.log(client)
  emit('update:' + e.target.id, value)
}
</script>

<style lang="scss" scoped>
.formInput {
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 387px;
    height: 43px;
    flex-shrink: 0;
    border-radius: 27px;
    background: var(--Green, #01d957);
    cursor: pointer;

    p {
      color: #fff;
    }
  }
  &__input {
    width: 387px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #eeeded;
    background: #fbfbfb;
    padding: 16px 15px;

    color: #1d1b1b;
    font-family: Gilroy-Light;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.8%; /* 16.072px */
    letter-spacing: 0.14px;
    &::placeholder {
      color: #1d1b1b;
      font-family: Gilroy-Light;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 114.8%; /* 16.072px */
      letter-spacing: 0.14px;
    }
  }
}
</style>
