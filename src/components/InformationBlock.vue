<template>
  <div
    class="informationBlock"
    :class="{
      informationBlock_reverse: props.reverse,
      informationBlock_column: props.columnDirection
    }"
  >
    <p class="informationBlock__subject">
      <slot name="subject"></slot>
    </p>
    <div class="informationBlock__holderInfo">
      <slot name="info"></slot>
    </div>
    <slot name="picture"></slot>
    <div class="informationBlock__holderCard" v-if="$slots.holder">
      <slot name="holder" v-if="$slots.holder"></slot>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  reverse: {
    Boolean: false
  },
  columnDirection: {
    Boolean: false
  }
})
</script>

<style lang="scss" scoped>
.informationBlock {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &__subject {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #d2d2d2;
  }
  &__holderInfo {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 36px 0 0 72px;
  }
  &_reverse {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  &_column {
    flex-direction: column;
    align-items: normal;
    gap: 50px;
  }
  &__holderCard {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
