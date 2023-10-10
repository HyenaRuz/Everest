<template>
  <form class="formInput" action="" @submit.prevent="onSubmit" @change="checkForm">
    <input
      class="formInput__input"
      id="name"
      type="text"
      placeholder="Ваше имя"
      v-model="client.name"
    />
    <input
      class="formInput__input"
      id="email"
      type="email"
      placeholder="Почта"
      v-model="client.email"
    />
    <input
      class="formInput__input"
      id="phone"
      type="tel"
      placeholder="Телефон(необязательно)"
      v-model="client.phone"
      onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,10}$/.test(this.value))"
    />
    <!-- <button type="submit"><p>Отправить</p></button> -->
    <MyButton v-on:execute-method="onSubmit">Отправить</MyButton>
  </form>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import MyButton from './MyButton.vue';

const emet = defineEmits(['submit', 'inputValue',])

let client = ref({
  name: '',
  email: '',
  phone: ''
})

const onSubmit = () => {

  let error = []

  if (client.value.name.length < 1) {
    error.push("поле имени пустое")
  }
  if (!validateEmail(client.value.email)) {
    error.push("неправильная почта")
  }
  if(client.value.phone.length < 10) {
    error.push("неправильный номер телефона")
  }


  if(error.length >= 1) {
    console.log(error)
  } else {
    console.log(client.value)
    emet('submit', true)
    emet('inputValue', false)
  }
}

function validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

const checkForm = () => {
  if (
    client.value.email.length > 0 ||
    client.value.name.length > 0 ||
    client.value.phone.length > 0
  ) {
    emet('inputValue', true)
  } else {
    emet('inputValue', false)
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
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.8%; /* 16.072px */
    letter-spacing: 0.14px;
    &::placeholder {
      color: #1d1b1b;
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 114.8%; /* 16.072px */
      letter-spacing: 0.14px;
    }
  }
}
</style>
