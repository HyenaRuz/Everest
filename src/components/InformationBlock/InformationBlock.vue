<template>
  <div
    class="informationBlock"
    :class="{
      informationBlock_reverse: reverse,
      informationBlock_column: columnDirection
    }"
  >
    <p class="informationBlock__subject" v-if="width >= 1136 && subject">{{ subject }}</p>
    <div class="informationBlock__holderInfo">
      <p class="informationBlock__subject" v-if="width <= 1136  && subject">{{ subject }}</p>
      <InformationBlock__info
        class="informationBlock__info"
        :button="buttonInfo"
        v-for="(info, index) in dataInfo"
        :key="index"
        :data="info"
        :linkButton="linkButton"
      >
      <HolderImg class="informationBlock__imgMobile"
      v-if="picture && width <= 1136"
      :horizontal="imgHorizontal"
      :vertical_three_corners="imgVerticalThreeCorners"
      :collage__lines="imgCollageLines"
      >
       <img :src="picture" alt="" />
      </HolderImg>
      </InformationBlock__info>
      <slot></slot>
      <div class="informationBlock__info" v-if="$slots.info">
        <slot name="info"></slot>
      </div>
    </div>
    <div v-if="width >= 1136">
      <HolderImg
        v-if="picture"
        :horizontal="imgHorizontal"
        :vertical_three_corners="imgVerticalThreeCorners"
        :collage__lines="imgCollageLines"
      >
        <img :src="picture" alt="" />
      </HolderImg>
    </div>
    <div class="informationBlock__holderCard" v-if="$slots.holder">
      <slot name="holder"></slot>
    </div>
  </div>
</template>

<script setup>
import InformationBlock__info from './components/Info.vue'
import HolderImg from '@/components/holderImg.vue'
import {useResizeWidth} from '@/composables/useResizeWidth'

let {width} = useResizeWidth();

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
  picture: {},
  imgCollageLines: {
    type: Boolean
  },
  imgHorizontal: {
    type: Boolean
  },
  imgVertical: {
    type: Boolean
  },
  imgVerticalThreeCorners: {
    type: Boolean
  },
  linkButton: {
    String
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

  &__info {
    margin-left: 72px;
  }
  &__subject {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #d2d2d2;
    font-weight: 900;
    letter-spacing: 1.05px;
  }
  &__holderInfo {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 36px 0 0 0;
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

@media screen and (max-width: 1136px){
  .informationBlock{
    flex-direction: column;
    width: min-content;
  }
  .informationBlock__imgMobile {
    margin: 40px 0 40px 0;
  }
  .informationBlock__info{
    margin: 0;
  }
  .informationBlock__subject{
    position: relative;
  }
  .informationBlock__holderInfo{
    margin: 0;
    gap: 15px;
  }
  .informationBlock__holderCard{
    align-self: center;
    flex-direction: column;
    gap: 30px;
    width: max-content;
  }
  .informationBlock_column{
    align-items: center;
  }
}
</style>
