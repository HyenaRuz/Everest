<template>
  <HeaderVue />
  <main>
    <slot></slot>
    <FAQ />
  </main>
  <BannerFooter />
  <FooterCom />
</template>

<script setup>
import HeaderVue from '../components/Header-Comp.vue'
import FooterCom from '../components/FooterCom.vue'
import FAQ from '../components/FAQ.vue'
import BannerFooter from '../components/BannerFooter.vue'
</script>

<style lang="scss" scoped></style>
