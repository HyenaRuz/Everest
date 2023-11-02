<template>
    <div class="burger" @click.prevent="isActive = !isActive, emits('executeMethod')">
        <div class="burger__line burger__line-top" :class="{'burger__line-top_open': isActive}"></div>
        <div class="burger__line burger__line-center" :class="{'burger__line-center_open': isActive}"></div>
        <div class="burger__line burger__line-bottom" :class="{'burger__line-bottom_open': isActive}"></div>
    </div>
</template>

<script setup>
    import { ref, defineEmits } from 'vue';

    let isActive = ref(false)

    let emits = defineEmits(['executeMethod'])
</script>

<style lang="scss" scoped>
    .burger{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
        width: 32px;
        height: 32px;
        position: relative;
        
        &__line {
            width: 28px;
            border-bottom: 3px solid #01D957;
            border-radius: 99999px;
            transition: all 300ms;
            overflow: hidden;

            &-top{
                &_open{
                    width: 32px;
                    transform: rotate(-45deg);
                    position: absolute;
                    top: 50%;
                    left: 0;
                    border-bottom: 4px solid #01D957;
                }
            }
            &-center{
                &_open{
                    opacity: 0;
                    position: absolute;
                    z-index: -10;
                    transition: opacity 0.1s ease-out;;
                }
            }
            &-bottom{
                &_open{
                    width: 32px;
                    transform: rotate(45deg);
                    position: absolute;
                    top: 50%;
                    left: 0;
                    border-bottom: 4px solid #01D957;
                }
            }
        }
    }
</style>