<template>
  <button
    class="button"
    :style="{ styleObject }"
    @click.prevent="emits('executeMethod')"
    :class="{
      'button-cross': props.crossShape,
      'button-defaultButton': props.defaultButton
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits, reactive } from 'vue'

let props = defineProps({
  crossShape: {
    Boolean: false
  },
  defaultButton: {
    Boolean: false
  }
})

const styleObject = reactive({
  transform: 'rotate(45deg)'
})
let emits = defineEmits(['executeMethod'])
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
  min-width: 23px;
  min-height: 23px;
  display: inline-block;

  &-defaultButton {
    width: 183px;
    height: 43px;
    border-radius: 27px;
    background: var(--Green, #01d957);
    border: none;
  }
}
</style>
