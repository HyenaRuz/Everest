<template>
  <DefaultLayout :bannerShow="true">
    <TableOfContents :backgroundImg="img_bg">
      <template v-slot:title>Фондовая биржа</template>
      <template v-slot:text
        >Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим
        задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для
        торговли, сделать оценку портфеля.</template
      >
    </TableOfContents>
  </DefaultLayout>
</template>

<script setup>
import img_bg from '../assets/img/bg-img-StockExchangeView.png'

import TableOfContents from '../components/TableOfContents.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<style lang="scss" scoped></style>