<template>
  <HeaderVue />
  <TableOfContents
    v-if="tableShow"
    :backgroundImg="tableBackgroundImg"
    :data="tableData"
    :batton="{ text: tableBattonData.text, isActive: tableBattonData.isActive }"
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
import HeaderVue from '../components/Header-Comp.vue'
import FooterCom from '../components/FooterCom.vue'
import BannerFooter from '../components/BannerFooter.vue'
import FAQ from '../components/FAQ.vue'
import TableOfContents from '../components/TableOfContents'
import AmBreadcrumbs from '../components/AmBreadcrumbs.vue'
import DataQuestions from '../components/data/questionsData'

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
  tableBattonData: {
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
</style>
