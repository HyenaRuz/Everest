<template>
  <HeaderVue />
  <main>
    <slot></slot>
  </main>
  <FooterCom />
</template>

<script setup>
import HeaderVue from '../components/Header-Comp.vue'
import FooterCom from '../components/FooterCom.vue'
</script>

<style lang="scss" scoped></style>
