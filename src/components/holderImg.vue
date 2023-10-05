<template>
  <div
    :class="{
      collage_horizontal: props.horizontal,
      collage_vertical: props.vertical,
      'collage_vertical_three-corners': props.vertical_three_corners,
      'collage-icon': props.icon,
      'collage-icon-reverse': props.icon_reverse,
      'collage_horizontal_three-corners': props.horizontal_three_corners,
    }"
    class="collage"
  >
    <slot></slot>
    <div :class="{ 'collage__lines_turn-on': props.collage__lines }" class="collage__lines">
      <div class="collage__box"></div>
      <div class="collage__box"></div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  collage__lines: {
    type:Boolean,
    default: false
  },
  horizontal: {
    type:Boolean,
    default: false
  },
  vertical: {
    type:Boolean,
    default: false
  },
  vertical_three_corners: {
    type:Boolean,
    default: false
  },
  horizontal_three_corners: {
    type:Boolean,
    default: false
  },
  icon: {
    type:Boolean,
    default: false
  },
  icon_reverse: {
    type:Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.collage {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: fit-content;
  overflow: hidden;

  img {
    width: 100%;
  }
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
}
.collage_vertical {
  border-radius: 120px 0px;
}
.collage_vertical_three-corners {
  border-radius: 200px 0px 300px 300px;
  max-width: 467px;
  // max-height: 756px;
}
.collage_horizontal_three-corners {
  border-radius: 80px 0px 80px 80px;
  max-width: 467px;
  // max-height: 756px;
}
.collage_horizontal {
  border-radius: 80px 0px;
}
.collage-icon{
  width: 278px;
  height: 171px;
  opacity: 0.8;
  background: var(--Green, #01D957);
  box-shadow: 0px 10px 50px 0px rgba(48, 41, 217, 0.30);
  display: flex;
  justify-content: space-between;
  gap: 0;
  padding: 50px;
  border-radius: 80px 0px 80px 80px;
  &-reverse{
    border-radius: 80px 80px 80px 0px;
  }
}
</style>
