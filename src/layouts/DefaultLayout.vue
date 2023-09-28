<template>
  <HeaderVue />
  <main>
    <slot></slot>
  </main>
  <FAQ v-if="props.faqShow" />
  <BannerFooter v-if="props.bannerShow" />
  <FooterCom />
</template>

<script setup>
import HeaderVue from '../components/Header-Comp.vue'
import FooterCom from '../components/FooterCom.vue'
import BannerFooter from '../components/BannerFooter.vue'
import FAQ from '../components/FAQ.vue'

let props = defineProps({
  bannerShow: {
    Boolean: false
  },
  faqShow: {
    Boolean: false
  }
})
</script>

<style lang="scss" scoped></style>
