<template>
  <form class="formInput" action="">
    <input
      class="formInput__input"
      id="name"
      type="text"
      placeholder="Ваше имя"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    />
    <input
      class="formInput__input"
      id="email"
      type="email"
      placeholder="Почта"
      :value="email"
      @input="$emit('update:email', $event.target.value)"
    />
    <input
      class="formInput__input"
      id="phone"
      type="tel"
      placeholder="Телефон(необязательно)"
      :value="phone"
      @input="$emit('update:phone', $event.target.value)"
    />
    <button @click.prevent="onSubmit"><p>Отправить</p></button>
  </form>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  name: String,
  email: String,
  phone: String
})
defineEmits(['submit', 'inputValue', 'update:phone', 'update:email', 'update:name'])

// const checkForm = () => {
//   if (
//     props.email.length > 0 ||
//     props.name.length > 0 ||
//     props.phone.length > 0
//   ) {
//     return true
//   } else {
//     return false
//   }
// }
const onSubmit = () => {}
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
