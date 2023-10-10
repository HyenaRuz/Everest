<template>
  <DefaultLayout
    :tableShow="true"
    :tableBackgroundImg="img"
    :tableData="tabl"
    :tableBattonData="{ text: 'Узнать подробнее', isActive: true }"
  >
    <InformationBlock
      class="block1"
      :subject="'О НАС'"
      :dataInfo="[EverestFinance]"
      :buttonInfo="true"
      :picture="imgHome"
      :linkButton="'aboutUs'"
    />

    <InformationBlock class="block2" :columnDirection="true" :subject="'МЫ ПРЕДЛАГАЕМ'">
      <template v-slot:info>
        <InformationBlock__info :widthTitle="800">
          Наши услуги:
          <RouterLink :to="{ name: 'stockExchange' }">Фондовая биржа</RouterLink>
          и <RouterLink :to="{ name: 'cryptocurrency' }">Криптовалюта</RouterLink>
        </InformationBlock__info>
      </template>

      <template v-slot:holder>
        <cardLink :picture="imgCard1" :cardLink="'stockExchange'">
          <template v-slot:title> Фондовая биржа </template>
          <template v-slot:text>
            При инвестировании средств через ИИС вы не просто освободитесь от уплаты НДФЛ, но и
            сможете претендовать на возврат 13% от уплаченного ранее налога.
          </template>
        </cardLink>

        <cardLink :picture="imgCard2" :cardLink="'cryptocurrency'">
          <template v-slot:title> Криптовалюта</template>
          <template v-slot:text>
            При инвестировании средств через ИИС вы не просто освободитесь от уплаты НДФЛ, но и
            сможете претендовать на возврат 13% от уплаченного ранее налога.
          </template>
        </cardLink>
      </template>
    </InformationBlock>
  </DefaultLayout>
</template>

<script setup>
import img from '../assets/img/Rectangle3.png'
import imgHome from '../assets/img/img-home-1.png'
import imgCard1 from '../assets/img/img-card1.png'
import imgCard2 from '../assets/img/img-card2.png'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import cardLink from '../components/cardLink.vue'
import InformationBlock from '../components/InformationBlock'
import InformationBlock__info from '../components/InformationBlock/components/Info.vue'
import { RouterLink } from 'vue-router'
import { EverestFinance, tabl } from '../components/data/HomeData'
</script>

<style lang="scss" scoped>
.block2 {
  margin-top: 190px;
}
a {
  color: var(--Green, #01d957);
  font-family: Gilroy;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 114.8%; /* 27.552px */
  letter-spacing: 0.24px;
}


</style>
