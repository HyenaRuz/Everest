<template>
  <DefaultLayout
    :bannerShow="true"
    :faqShow="true"
    :tableShow="true"
    :tableBackgroundImg="img_bg"
    :tableData="tabl"
    :tableButtonData="{ text: 'Оставить заявку', isActive: true }"
  >

  <InformationBlock
      class="block"
      :subject="'КРИПТОВАЛЮТА'"
      :dataInfo="[section1, section2]"
      :imgHorizontal="true"
      :imgCollageLines="true"
    />

    <InformationBlock
      class="block"
      :reverse="true"
      :dataInfo="[section3]"
      :imgHorizontal="true"
    />
  </DefaultLayout>
</template>

<script setup>
import img_bg from '../assets/img/bg-img-StockExchangeView.png'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import InformationBlock from '../components/InformationBlock'

import { section1, section2, section3, tabl } from '../components/data/StockExchangeData'


</script>

<style lang="scss" scoped>
.block + .block{
  margin-top: 155px;
}
</style>
