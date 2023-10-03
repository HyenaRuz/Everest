<template>
  <HeaderVue />
  <TableOfContents
    v-if="tableShow"
    :backgroundImg="tableBackgroundImg"
    :data="tableData"
    :batton="{ text: tableBattonData.text, isActive: tableBattonData.isActive }"
  />
  <AmBreadcrumbs class="amBreadcrumbs center" />
  <main>
    <slot></slot>
  </main>
  <FAQ v-if="props.faqShow" class="faq" />
  <BannerFooter v-if="props.bannerShow" />
  <FooterCom />
</template>

<script setup>
import HeaderVue from '../components/Header-Comp.vue'
import FooterCom from '../components/FooterCom.vue'
import BannerFooter from '../components/BannerFooter.vue'
import FAQ from '../components/FAQ.vue'
import TableOfContents from '../components/TableOfContents.vue'
import AmBreadcrumbs from '../components/AmBreadcrumbs.vue'

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
  }
})
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 150px;
  margin-bottom: 150px;
}
.amBreadcrumbs {
  position: absolute;
  top: 95px;
}
</style>
