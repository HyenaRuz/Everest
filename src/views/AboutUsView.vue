<template>
  <DefaultLayout :bannerShow="true" :tableShow="true" :tableBackgroundImg="img" :tableData="tabl">
    <InformationBlock class="informationBlock"
      :subject="'НАШЕ ПРЕИМУЩЕСТВО - ЭТО'"
      :dataInfo="[section1]"
      :picture="imgAboutUs_1"
      :imgHorizontal="true"
    />

    <InformationBlock class="informationBlock" 
      :reverse="true"
      :dataInfo="[section2]"
      :picture="imgAboutUs_2"
      :imgVerticalThreeCorners="true"
    />
  </DefaultLayout>
</template>

<script setup>
import img from '../assets/img/img-Title2.png'
import imgAboutUs_1 from '../assets/img/img-AboutUs_1.png'
import imgAboutUs_2 from '../assets/img/img-AboutUs-2.png'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import InformationBlock from '../components/InformationBlock.vue'

const section1 = {
  title: 'Ваш легкий старт в мире финансов',
  text: [
    'Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для торговли, сделать оценку портфеля.',
    'Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже открыто более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более 246 миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС и выбора надежного партера для этой задачи.',
    'При инвестировании средств через ИИС вы не просто освободитесь от уплаты НДФЛ, но и сможете претендовать на возврат 13% от уплаченного ранее налога.'
  ]
}
const section2 = {
  title: 'Опыт наших специалистов',
  text: [
    'Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для торговли, сделать оценку портфеля.',
    'Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже открыто более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более 246 миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС и выбора надежного партера для этой задачи.'
  ]
}
const tabl = {
  title: 'Everest Finance',
  text: [
    'Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для торговли, сделать оценку портфеля.'
  ]
}
</script>

<style lang="scss" scoped>
.informationBlock {
  margin-top: 150px;
}
</style>
