<template>
  <div class="holder">
    <img :src="props.backgroundImg" alt="" />
    <div class="holder__info">
      <p class="info__title">
        <slot name="title"></slot>
      </p>
      <p class="info__text">
        <slot name="text"></slot>
      </p>
      <MyButton>Узнать подробнее</MyButton>
    </div>
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue'

let props = defineProps({
  backgroundImg: {}
})
</script>

<style lang="scss" scoped>
.holder {
  // background-image: url(../assets/img/Rectangle3.png);
  background-repeat: no-repeat;
  // min-height: 417px;
  height: 501px;
  display: flex;
  justify-content: center;
  img {
    display: block;
    position: absolute;
    z-index: -10;
    align-items: center;
  }
  .holder__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    .info__title {
      color: var(--white, #fff);
      font-family: Gilroy-Light;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: 114.8%; /* 57.4px */
      letter-spacing: 0.5px;
      max-width: 711px;
    }
    .info__text {
      color: var(--white, #fff);
      width: 590px;
    }
  }
}
</style>
