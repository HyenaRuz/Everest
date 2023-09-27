<template>
  <form @submit.prevent="backCall" class="formInput" action="">
    <input
      v-model="client.name"
      class="formInput__input"
      id="name"
      type="text"
      placeholder="Ваше имя"
    />
    <input
      v-model="client.email"
      class="formInput__input"
      id="email"
      type="email"
      placeholder="Почта"
    />
    <input
      v-model="client.phone"
      class="formInput__input"
      id="phone"
      type="tel"
      placeholder="Телефон(необязательно)"
    />
    <button @click.prevent="onSubmit"><p>Отправить</p></button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

let client = ref({
  email: '',
  name: '',
  phone: ''
})

const emit = defineEmits(['submit'])

const onSubmit = () => {
  emit('submit', client.value)
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
