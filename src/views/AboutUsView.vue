<template>
  <DefaultLayout :bannerShow="true" :tableShow="true" :tableBackgroundImg="img" :tableData="tabl">
    <InformationBlock
      class="informationBlock"
      :subject="'НАШЕ ПРЕИМУЩЕСТВО - ЭТО'"
      :dataInfo="[section1]"
      :picture="imgAboutUs_1"
      :imgHorizontal="true"
    />

    <InformationBlock
      class="informationBlock"
      :reverse="true"
      :dataInfo="[section2]"
      :picture="imgAboutUs_2"
      :imgVerticalThreeCorners="true"
    >
      <CollageIcon :data="[icon1, icon2, icon3, icon4]" />
    </InformationBlock>
  </DefaultLayout>
</template>

<script setup>
import img from '../assets/img/img-Title2.png'
import imgAboutUs_1 from '../assets/img/img-AboutUs_1.png'
import imgAboutUs_2 from '../assets/img/img-AboutUs-2.png'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import InformationBlock from '../components/InformationBlock'
import CollageIcon from '../components/CollageIcon'

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
