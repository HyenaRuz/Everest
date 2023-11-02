<template>
  <HeaderVue v-if="width >= 1000"/>
  <MobileHeader v-if="width <= 1000"/>
  <TableOfContents
    v-if="tableShow"
    :backgroundImg="tableBackgroundImg"
    :data="tableData"
    :button="{ text: tableButtonData.text, isActive: tableButtonData.isActive }"
  />
  <AmBreadcrumbs class="amBreadcrumbs center" />
  <main :class="{ main: padding }">
    <slot></slot>
  </main>
  <FAQ v-if="props.faqShow" class="faq" :questions="DataQuestions" />
  <BannerFooter v-if="props.bannerShow" />
  <FooterCom />
</template>

<script setup>
import HeaderVue from '../components/Header/DefaultHeader.vue'
import FooterCom from '../components/Footer/DefaultFooter.vue'
import BannerFooter from '../components/BannerFooter.vue'
import FAQ from '../components/FAQ.vue'
import TableOfContents from '../components/TableOfContents.vue'
import AmBreadcrumbs from '../components/AmBreadcrumbs.vue'
import DataQuestions from '../components/data/questionsData'
import MobileHeader from '../components/Header/MobileHeader.vue'
import {useResizeWidth} from '@/composables/useResizeWidth'

let {width} = useResizeWidth();

let props = defineProps({
  bannerShow: {
    type: Boolean
  },
  faqShow: {
    type: Boolean
  },
  tableShow: {
    Boolean: false
  },
  tableBackgroundImg: {},
  tableButtonData: {
    default: () => ({}),
    type: Object
  },
  tableData: {
    Object
  },
  padding: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.main {
  padding-top: 150px;
  padding-bottom: 150px;
}
.faq {
  margin-bottom: 150px;
}
.amBreadcrumbs {
  position: absolute;
  top: 95px;
}

@media screen and (max-width: 1136px){
  .main{
  padding-top: 70px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  }
}
</style>
