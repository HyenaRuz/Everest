<template>
  <button class="button" @click.prevent="emits('executeMethod')">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

let emits = defineEmits(['executeMethod'])
</script>

<style lang="scss" scoped>
.button {
  width: 183px;
  height: 43px;
  border-radius: 27px;
  background: var(--Green, #01d957);
  border: none;
  color: #fff;
  font-family: Gilroy-Light;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.14px;
  cursor: pointer;
}
</style>
