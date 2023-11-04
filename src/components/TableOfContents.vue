<template>
  <div class="holder">
    <img :src="props.backgroundImg" alt="" />
    <div class="holder__info center">
      <h2 class="holder__title">
        {{ props.data.title }}
      </h2>
      <div class="holder__texts" v-for="(text, index) in props.data.text" :key="index">
        <p class="holder__text">{{ text }}</p>
      </div>
      <MyButton v-if="button.isActive">{{ button.text }}</MyButton>
    </div>
  </div>
</template>

<script setup>
import MyButton from '../components/MyButton.vue'

let props = defineProps({
  backgroundImg: {},
  button: {
    isActive: Boolean,
    text: String
  },
  data: {
    Object
  }
})
</script>

<style lang="scss" scoped>
.holder {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &__amBreadcrumbs {
    position: absolute;
    top: 20px;
  }
  img {
    display: block;
    z-index: -10;
    align-items: center;
  }
  &__info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    position: absolute;
  }
  &__title {
    max-width: 711px;
  }
  &__text {
    color: var(--white, #fff);
    width: 590px;
  }
}

@media screen and (max-width: 1000px){
  .holder{
    width: 100vw;
  }
}
</style>
