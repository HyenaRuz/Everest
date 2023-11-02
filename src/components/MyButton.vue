<template>
  <button
    :class="{
      button_circle: circle,
      button: ellipse
    }"
    @click.prevent="emits('executeMethod')">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
  circle: {
    Boolean,
    default: false,
  },
  ellipse: {
    Boolean,
    default: true
  }
})

let emits = defineEmits(['executeMethod'])

// const goToLink = (value) = {

// } 

</script>

<style lang="scss" scoped>
.button {
  color: #fff;
  font-family: Gilroy;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.14px;
  cursor: pointer;
  display: inline-block;
  width: 183px;
  height: 43px;
  border-radius: 27px;
  background: var(--Green, #01d957);
  border: none;
  transition: background 0.25s ease-in;
  
  &:hover,
  &:focus {
    transition: background 0.3s ease-out;
    background: #3eaf7c;
  }
  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
}
.button_circle {
  color: #fff;
  font-family: Gilroy;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;  width: 40px;
  height: 40px;
  border-radius: 27px;
  background: var(--Green, #01d957);
  border: none;
  transition: background 0.25s ease-in;
  
  &:hover,
  &:focus {
    transition: background 0.3s ease-out;
    background: #3eaf7c;
  }
  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
}
</style>
