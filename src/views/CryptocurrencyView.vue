<template>
  <DefaultLayout
    :bannerShow="true"
    :faqShow="true"
    :tableShow="true"
    :tableBackgroundImg="img"
    :tableData="tabl"
    :tableButtonData="{ text: 'Оставить заявку', isActive: true }"
  >
    <InformationBlock
      class="block"
      :subject="'КРИПТОВАЛЮТА'"
      :dataInfo="[section1, section2]"
      :picture="imgCryptocurrency_1"
      :imgHorizontal="true"
      :imgCollageLines="true"
    />

    <InformationBlock
      class="block"
      :reverse="true"
      :dataInfo="[section3]"
      :picture="imgCryptocurrency_1"
      :imgHorizontal="true"
    />
  </DefaultLayout>
</template>

<script setup>
import img from '../assets/img/img-Title3.png'
import InformationBlock from '../components/InformationBlock'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { section1, section2, section3, tabl } from '../components/data/CryptocurrencyData.js'
</script>

<style lang="scss" scoped>
.block + .block{
  margin-top: 155px;
}

@media screen and (max-width: 1136px){
  .block + .block {
    margin: 0;
  }
}
</style>
