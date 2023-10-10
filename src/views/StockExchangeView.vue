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
      :picture="img_1"
      :imgHorizontal="true"
      :imgCollageLines="true"
    />

    <InformationBlock
      class="block"
      :reverse="true"
      :dataInfo="[section3]"
      :picture="img_2"
      :imgHorizontal="true"
    />
  </DefaultLayout>
</template>

<script setup>
import img_bg from '../assets/img/bg-img-StockExchangeView.png'
import img_1 from '../assets/img/img-StockExchange_1.png'
import img_2 from '../assets/img/img-StockExchange_2.png'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import InformationBlock from '../components/InformationBlock'

import { section1, section2, section3, tabl } from '../components/data/CryptocurrencyData'


</script>

<style lang="scss" scoped>
.block + .block{
  margin-top: 155px;
}
</style>
