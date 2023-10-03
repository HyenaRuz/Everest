<template>
  <div
    class="informationBlock"
    :class="{
      informationBlock_reverse: reverse,
      informationBlock_column: columnDirection
    }"
  >
    <p class="informationBlock__subject">{{ subject }}</p>
    <div class="informationBlock__holderInfo">
      <InformationBlock__info :button="buttonInfo"  v-for="(info, index) in dataInfo" :key="index" :data="info"/>
      <slot name="info"></slot>
    </div>

    <HolderImg v-if="picture"
     :horizontal="imgHorizontal" 
     :vertical_three_corners="imgVerticalThreeCorners" 
     :collage__lines="imgCollageLines">
          <img :src="picture" alt="" />
    </HolderImg>
    <div class="informationBlock__holderCard" v-if="$slots.holder">
      <slot name="holder"></slot>
    </div>
  </div>
</template>

<script setup>
import InformationBlock__info from '../components/informationBlock__info.vue'
import HolderImg from '../components/holderImg.vue'

defineProps({
  reverse: {
    Boolean: false
  },
  columnDirection: {
    Boolean: false
  },
  subject: {
    type: String
  },
  dataInfo: {
    type: Array
  },
  buttonInfo: {
    type: Boolean
  },
  picture: {
  },
  imgCollageLines: {
    type:Boolean
  },
  imgHorizontal: {
    type:Boolean
  },
  imgVertical: {
    type:Boolean
  },
  imgVerticalThreeCorners: {
    type:Boolean
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
