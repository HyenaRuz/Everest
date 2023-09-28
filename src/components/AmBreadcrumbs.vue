<template>
  <div class="holderBreadcrumbs">
    <AmBreadcrumbs class="holderBreadcrumbs__amBreadcrumbs">
      <template #crumb="{ crumb }">
        <router-link class="holderBreadcrumbs__my-custom-crumb" :to="crumb.link">
          {{ crumb.label }}
        </router-link>
      </template>
    </AmBreadcrumbs>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.holderBreadcrumbs {
  &__amBreadcrumbs {
    margin: 0;
  }
  &__my-custom-crumb {
    color: var(--white, #fff);
    font-family: Gilroy-Light;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 114.8%; /* 16.072px */
    letter-spacing: 0.14px;
    margin-right: 10px;
    position: relative;
  }
}
</style>
