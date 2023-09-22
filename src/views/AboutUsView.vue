<template>
  <DefaultLayout :bannerShow="true">
    <TableOfContents v-bind:background-img="img">
      <template v-slot:title>Everest Finance</template>
      <template v-slot:text
        >Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим
        задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для
        торговли, сделать оценку портфеля.</template
      >
    </TableOfContents>
  </DefaultLayout>
</template>

<script setup>
import TableOfContents from '../components/TableOfContents.vue'
import img from '../assets/img/img-Title2.png'
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<style lang="scss" scoped></style>
