<template>
  <DefaultLayout>
    <TableOfContents v-bind:background-img="img">
      <template v-slot:title>Финансовые решения для достижения ваших целей</template>
      <template v-slot:text
        >Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим
        задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для
        торговли, сделать оценку портфеля.</template
      >
    </TableOfContents>

    <InformationBlock class="block1">
      <template v-slot:subject>О НАС</template>

      <template v-slot:info>
        <InformationBlock__info :button="true">
          <template v-slot:title>Everest Finance</template>
          <template v-slot:text1>
            Хорошо продуманный функционал программы позволяет настроить торговую систему согласно
            Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты
            для торговли, сделать оценку портфеля.
          </template>
          <template v-slot:text2>
            Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже открыто
            более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более 246
            миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС и
            выбора надежного партера для этой задачи.
          </template>
          <template v-slot:text3>
            При инвестировании средств через ИИС вы не просто освободитесь от уплаты НДФЛ, но и
            сможете претендовать на возврат 13% от уплаченного ранее налога.
          </template>
        </InformationBlock__info>
      </template>

      <template v-slot:picture>
        <HolderImg :horizontal="true">
          <img src="../assets/img/img-home-1.png" alt="" />
        </HolderImg>
      </template>
    </InformationBlock>

    <InformationBlock :columnDirection="true" class="block2">
      <template v-slot:subject>МЫ ПРЕДЛАГАЕМ</template>

      <template v-slot:info>
        <InformationBlock__info>
          <template v-slot:title
            >Наши услуги:
            <RouterLink :to="{ name: 'home' }">Фондовая биржа</RouterLink>
            и <RouterLink :to="{ name: 'stockExchange' }">Криптовалюта</RouterLink></template
          >
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
import imgCard1 from '../assets/img/img-card1.png'
import imgCard2 from '../assets/img/img-card2.png'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import TableOfContents from '../components/TableOfContents.vue'
import cardLink from '../components/cardLink.vue'
import InformationBlock from '../components/InformationBlock.vue'
import HolderImg from '../components/holderImg.vue'
import InformationBlock__info from '../components/informationBlock__info.vue'
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.block1 {
  margin-top: 184px;
}
.block2 {
  margin-top: 150px;
  margin-bottom: 139px;
}
a {
  color: var(--Green, #01d957);
  font-family: Gilroy-Light;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 114.8%; /* 27.552px */
  letter-spacing: 0.24px;
}
</style>
