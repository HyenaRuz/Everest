<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="info">
    <h3 class="info__title" :style="{ width: styleTitle() }">
      {{ dataInfo.title }}
      <slot></slot>
    </h3>
    <slot name="mobileImg"></slot>
    <div class="info__holderText" v-for="(text, index) in dataInfo.text" :key="index">
      <p class="info__text">{{ text }}</p>
    </div>
    
    <MyButton v-if="props.button" @executeMethod="redirectTo"> Читать больше </MyButton>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import {useResizeWidth} from '@/composables/useResizeWidth'

let {width} = useResizeWidth();

const ROUTER = useRouter();

let props = defineProps({
  button: {
    Boolean: false
  },
  widthTitle: {
    Number
  },
  data: {
    Object
  },
  linkButton: {
    String
  }
})

let dataInfo = { ...props.data }

const redirectTo = () => {
  ROUTER.push({ name: props.linkButton })
}

const styleTitle = () => {
  let titleWidth = ref( props.widthTitle )
  const widthResult = computed(() => {return titleWidth.value + 'px'})

  if ( width.value <= 1136){
    return 'auto'
  } else {
    return widthResult.value
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    &::before {
      content: '';
      position: absolute;
      top: 16px;
      left: -72px;
      border-bottom: 2px solid #01d957;
      width: 52px;
    }
  }
  &__holderText {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 475px;
  }
}
@media screen and (max-width: 1136px){
  .info__holderText{
    width: 100%;
  }
}
</style>
