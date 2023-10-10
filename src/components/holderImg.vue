<template>
  <div
    :class="{
      'holderImg-horizontal': props.horizontal,
      'holderImg-vertical': props.vertical,
      'holderImg-vertical-threeCorners': props.vertical_three_corners,
      'holderImg-icon': props.icon,
      'holderImg-icon-reverse': props.icon_reverse,
      'holderImg-horizontal-threeCorners': props.horizontal_three_corners
    }"
    class="holderImg"
  >
    <slot></slot>
    <div :class="{ 'holderImg__lines_turn-on': props.collage__lines }" class="holderImg__lines">
      <div class="holderImg__box"></div>
      <div class="holderImg__box"></div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  collage__lines: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  vertical_three_corners: {
    type: Boolean,
    default: false
  },
  horizontal_three_corners: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  },
  icon_reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.holderImg {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: fit-content;
  overflow: hidden;

  &__lines {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
  }
  &__lines_turn-on {
    opacity: 1;
  }
  &__box {
    background-color: white;
    width: 100%;
    height: 30px;
  }
  &-vertical {
    border-radius: 120px 0px;
  }
  &-vertical-threeCorners {
    border-radius: 200px 0px 300px 300px;
    max-width: 467px;
    // max-height: 756px;
  }
  &-horizontal-threeCorners {
    border-radius: 80px 0px 80px 80px;
    max-width: 467px;
    // max-height: 756px;
  }
  &-horizontal {
    border-radius: 80px 0px;
  }
  &-icon {
    width: 278px;
    height: 171px;
    opacity: 0.8;
    background: var(--Green, #01d957);
    box-shadow: 0px 10px 50px 0px rgba(48, 41, 217, 0.3);
    display: flex;
    justify-content: space-between;
    gap: 0;
    padding: 50px;
    border-radius: 80px 0px 80px 80px;
    &-reverse {
      border-radius: 80px 80px 80px 0px;
    }
  }
}
</style>
