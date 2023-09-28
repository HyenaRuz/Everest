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
  crossShapeClose: {
    Boolean: false
    // String:'transform: rotate(45deg);'
  },
  defaultButton: {
    Boolean: false
  }
})

const styleObject = reactive({
  transform: 'rotate(45deg)'
})

// if(props.crossShapeClose){

// }

let emits = defineEmits(['executeMethod'])
</script>

<style lang="scss" scoped>
.button {
  color: #fff;
  font-family: Gilroy-Light;
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
  &-cross {
    // display: block;
    // cursor: pointer;
    // width: 23px;
    // height: 23px;
    transition: all 0.3s;
    transform: rotate(0deg);

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
