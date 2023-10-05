<template>
    <div class="collageIcon">
        <HolderImg class="collageIcon__icon" :icon="true">
              <h2 class="collageIcon__title">{{ data[0].title }}</h2>
              <p class="collageIcon__text">{{ data[0].text }}</p>
        </HolderImg>
        <HolderImg class="collageIcon__icon collageIcon__icon-reverse" :icon="true" :icon_reverse="true">
              <h2 class="collageIcon__title">{{ data[1].title }}</h2>
              <p class="collageIcon__text">{{ data[1].text }}</p>
        </HolderImg>
        <HolderImg class="collageIcon__icon" :icon="true">
                <h2 class="collageIcon__title">{{ data[2].title }}</h2>
                <p class="collageIcon__text">{{ data[2].text }}</p>
        </HolderImg>
        <HolderImg class="collageIcon__icon collageIcon__icon-reverse" :icon="true" :icon_reverse="true">
              <h2 class="collageIcon__title">{{ data[3].title }}</h2>
              <p class="collageIcon__text">{{ data[3].text }}</p>
        </HolderImg>
    </div>
</template>

<script setup>
    import HolderImg from '@/components/holderImg.vue'
    import { defineProps } from 'vue';

    defineProps({
        data: {
            type: Array,
        }
    })
</script>


<style lang="scss" scoped>
.collageIcon {
    height: 420px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 0px;

    &__icon {
        grid-row: span 3;
        align-self: end;
        &-reverse{
            align-self: start;
        }
    }
    &__title {
        font-size: 4.4rem;
    }
    &__text{
        color: white;
    }
}
</style>