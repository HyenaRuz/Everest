<template>
  <HeaderVue />
  <main>
    <slot></slot>
  </main>
  <BannerFooter v-if="props.bannerShow" />
  <FooterCom />
</template>

<script setup>
import HeaderVue from '../components/Header-Comp.vue'
import FooterCom from '../components/FooterCom.vue'
import BannerFooter from '../components/BannerFooter.vue'

let props = defineProps({
  bannerShow: {
    Boolean: false
  }
})



</script>

<style lang="scss" scoped></style>
