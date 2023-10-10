<template>
  <DefaultLayout
    :bannerShow="true"
    :faqShow="true"
    :tableShow="true"
    :tableBackgroundImg="img"
    :tableData="tabl"
    :tableBattonData="{ text: 'Оставить заявку', isActive: true }"
  >
    <InformationBlock
      class="block1"
      :subject="'КРИПТОВАЛЮТА'"
      :dataInfo="[section1, section2]"
      :picture="imgCryptocurrency_1"
      :imgHorizontal="true"
      :imgCollageLines="true"
    />

    <InformationBlock
      class="block2"
      :reverse="true"
      :dataInfo="[section3]"
      :picture="imgCryptocurrency_1"
      :imgHorizontal="true"
    />
  </DefaultLayout>
</template>

<script setup>
import img from '../assets/img/img-Title3.png'
import imgCryptocurrency_1 from '../assets/img/img-cryptocurrency_1.png'
import InformationBlock from '../components/InformationBlock'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { section1, section2, section3, tabl } from '../components/data/CryptocurrencyData.js'
</script>

<style lang="scss" scoped>
.block2 {
  margin-top: 155px;
}
</style>
