<template>
  <div
    :class="{
      collage_horizontal: props.horizontal,
      collage_vertical: props.vertical,
      'collage_vertical_three-corners': props.vertical_three_corners
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
    Boolean: false
  },
  horizontal: {
    Boolean: false
  },
  vertical: {
    Boolean: false
  },
  vertical_three_corners: {
    Boolean: false
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
.collage_horizontal {
  border-radius: 80px 0px;
}
</style>
