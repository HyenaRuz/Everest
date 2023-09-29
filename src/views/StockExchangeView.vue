<template>
  <DefaultLayout :bannerShow="true" :faqShow="true" :tableShow="true" :tableBackgroundImg="img_bg" :tableData="tabl" :tableBattonData="{text: 'Оставить заявку', isActive: true }">
  </DefaultLayout>
</template>

<script setup>
import img_bg from '../assets/img/bg-img-StockExchangeView.png'

import DefaultLayout from '../layouts/DefaultLayout.vue'

const tabl = {
  title: 'Фондовая биржа',
  text: [
  'Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для торговли, сделать оценку портфеля.',
  ]
}
</script>

<style lang="scss" scoped></style>
