<template>
  <button
    class="button"
    @click.prevent="emits('executeMethod')">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

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
</style>
