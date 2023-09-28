<template>
  <div class="modalWindow">
    <div class="modalWindow__mask">
      <div class="modalWindow__wrapper">
        <div class="modalWindow__form" v-show="forvShow">
          <h4 class="modalWindow__title">Обратный звонок</h4>
          <FormInput @submit="onSubmit" />
        </div>
        <div class="modalWindow__text" v-if="!forvShow">
          <h4>
            Вы успешно отправили заявку на обратный звонок.
            <h4></h4>
            Мы вас наберем в ближайшее время!
          </h4>
        </div>
        <button type="button" class="modalWindow__button" @click.prevent="closeModal"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormInput from './formInput.vue'
import { defineEmits, ref } from 'vue'

let forvShow = true
const emit = defineEmits(['closeModalWindow'])
let valueSub = ref(false)

const onSubmit = (values) => {
  valueSub.value = values
}

const closeModal = () => {
  emit('closeModalWindow', valueSub.value)
}
</script>

<style lang="scss" scoped>
.modalWindow {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;

  &__mask {
    background-color: rgba(19, 19, 19, 0.9);
    width: 100%;
    height: 100%;
    z-index: 11;
  }
  &__wrapper {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: fixed;
    z-index: 100;
    border-radius: 12px;
    background: #fff;
    // position: relative;
    padding: 30px 25px 40px 25px;
    width: max-content;
    display: flex;
  }
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  &__text {
    display: flex;
    text-align: center;
    width: 353px;
    margin: auto;
    margin: 20px;
  }
  &__button {
    position: absolute;
    top: 0;
    right: -40px;
    display: block;
    cursor: pointer;
    width: 23px;
    height: 23px;
    // background-color: black;
    transform: rotate(-45deg);

    &::after {
      content: '';
      position: absolute;
      width: 23px;
      height: 0px;
      top: 10px;
      left: 0;
      border-bottom: 2px solid #01d957;
      border-radius: 9999px;
    }
    &::before {
      content: '';
      position: absolute;
      width: 23px;
      height: 0px;
      top: 10px;
      left: 0;
      border-bottom: 2px solid #01d957;
      border-radius: 9999px;
      transform: rotate(-90deg);
    }
  }
}
</style>
