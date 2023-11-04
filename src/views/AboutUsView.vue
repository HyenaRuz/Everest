<template>
  <DefaultLayout :bannerShow="true" :tableShow="true" :tableBackgroundImg="img" :tableData="tabl">
    <InformationBlock
      class="informationBlock"
      :subject="'НАШЕ ПРЕИМУЩЕСТВО - ЭТО'"
      :dataInfo="[section1]"
      :imgHorizontal="true"
    />

    <InformationBlock
      class="informationBlock"
      :reverse="true"
      :dataInfo="[section2]"
      :imgVerticalThreeCorners="true"
    >
      <CollageIcon :data="[icon1, icon2, icon3, icon4]" />
    </InformationBlock>
  </DefaultLayout>
</template>

<script setup>
import img from '../assets/img/img-Title2.png'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import InformationBlock from '../components/InformationBlock'
import CollageIcon from '../components/CollageIcon.vue'
import { section1, section2, tabl } from '../components/data/AboutUsData'

let icon1 = {
  title: '18',
  text: 'Лет опыта'
}
let icon2 = {
  title: '1500+',
  text: 'Довольных клиентов'
}
let icon3 = {
  title: '9.8/10',
  text: 'Рейтинг доверия'
}
let icon4 = {
  title: '5000$',
  text: 'Средний доход наших клиентов через полгода'
}
</script>

<style lang="scss" scoped>
.informationBlock + .informationBlock {
  margin-top: 150px;
}
</style>
