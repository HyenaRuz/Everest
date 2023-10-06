<template>
  <form class="formInput" action="" @submit.prevent="checkForm">
    <input
      class="formInput__input"
      id="name"
      type="text"
      placeholder="Ваше имя"
      v-model="client.name"
      @change="checkForm"
    />
    <input
      class="formInput__input"
      id="email"
      type="email"
      placeholder="Почта"
      v-model="client.email"
      @change="checkForm"
    />
    <input
      class="formInput__input"
      id="phone"
      type="tel"
      placeholder="Телефон(необязательно)"
      v-model="client.phone"
      @change="checkForm"
    />
    <button type="submit"><p>Отправить</p></button>
  </form>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const props = defineProps({
  name: String,
  email: String,
  phone: String,
  delete: Boolean
})
const emet = defineEmits(['inputValue', 'update:phone', 'update:email', 'update:name'])

let client = ref({
  name: '',
  email: '',
  phone: ''
})

if (props.delete) {
  client.value = undefined
}

const checkForm = () => {
  // console.log(client)
  if (
    client.value.email.length > 0 ||
    client.value.name.length > 0 ||
    client.value.phone.length > 0
  ) {
    emet('inputValue', true)
    // console.log(true)
  } else {
    emet('inputValue', false)
    // console.log(false)
  }
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
