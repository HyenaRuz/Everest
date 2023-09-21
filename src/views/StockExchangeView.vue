<template>
  <BannerLayout>
    <TableOfContents v-bind:background-img="img">
      <template v-slot:title>Фондовая биржа</template>
      <template v-slot:text
        >Хорошо продуманный функционал программы позволяет настроить торговую систему согласно Вашим
        задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты для
        торговли, сделать оценку портфеля.
      </template>
    </TableOfContents>

    <div class="block1">
      <InformationBlock>
        <template v-slot:subject>КРИПТОВАЛЮТА</template>

        <template v-slot:info>
          <InformationBlock__info>
            <template v-slot:title>Что такое криптовалюта?</template>
            <template v-slot:text1>
              Хорошо продуманный функционал программы позволяет настроить торговую систему согласно
              Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты
              для торговли, сделать оценку портфеля.
            </template>
            <template v-slot:text2>
              Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже
              открыто более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более
              246 миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС
              и выбора надежного партера для этой задачи.
            </template>
            <template v-slot:text3>
              При инвестировании средств через ИИС вы не просто освободитесь от уплаты НДФЛ, но и
              сможете претендовать на возврат 13% от уплаченного ранее налога.
            </template>
          </InformationBlock__info>

          <InformationBlock__info>
            <template v-slot:title> Услуги нашей компании в торговле криптовалютой </template>
            <template v-slot:text1>
              Хорошо продуманный функционал программы позволяет настроить торговую систему согласно
              Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты
              для торговли, сделать оценку портфеля.
            </template>
            <template v-slot:text2>
              Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже
              открыто более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более
              246 миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС
              и выбора надежного партера для этой задачи.
            </template>
          </InformationBlock__info>
        </template>

        <template v-slot:picture>
          <HolderImg :horizontal="true" :collage__lines="true">
            <img src="../assets/img/img-cryptocurrency_1.png" alt="" />
          </HolderImg>
        </template>
      </InformationBlock>
    </div>

    <div class="block2">
      <InformationBlock :reverse="true">
        <template v-slot:info>
          <InformationBlock__info>
            <template v-slot:title>Перспективы торговли криптовалютой</template>
            <template v-slot:text1
              >Хорошо продуманный функционал программы позволяет настроить торговую систему согласно
              Вашим задачам — внешний вид программы, отсортировать и выбрать необходимые инструменты
              для торговли, сделать оценку портфеля.
            </template>
            <template v-slot:text2
              >Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже
              открыто более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более
              246 миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС
              и выбора надежного партера для этой задачи.
            </template>
            <template v-slot:text3
              >Программа ИИС действует с начала 2015 года, а на сегодня физическими лицами уже
              открыто более 3 миллионов инвестсчетов. При значительном объеме активов на ИИС более
              246 миллиардов рублей появляется основание задуматься над необходимостью открытия ИИС
              и выбора надежного партера для этой задачи.
            </template>
          </InformationBlock__info>
        </template>

        <template v-slot:picture>
          <HolderImg :horizontal="true">
            <img src="../assets/img/img-cryptocurrency_2.png" alt="" />
          </HolderImg>
        </template>
      </InformationBlock>
    </div>
  </BannerLayout>
</template>

<script setup>
import TableOfContents from '../components/TableOfContents.vue'
import img from '../assets/img/img-Title3.png'
// import DefaultLayout from '../layouts/DefaultLayout.vue'
import InformationBlock from '../components/InformationBlock.vue'
import HolderImg from '../components/holderImg.vue'
import InformationBlock__info from '../components/informationBlock__info.vue'
import BannerLayout from '../layouts/BannerLayout.vue'
</script>

<style lang="scss" scoped>
.block1 {
  margin-top: 161px;
}
.block2 {
  margin: 155px 0 150px;
}
</style>
