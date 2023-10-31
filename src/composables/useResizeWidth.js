import { onMounted, onUnmounted, ref } from 'vue';

export function useResizeWidth(){
    let width = ref(window.innerWidth)

    const resize = () => {
    width.value = window.innerWidth
    };
    onMounted(() => {
    window.addEventListener('resize', resize)
    })
    onUnmounted(() => {
    window.removeEventListener('resize', resize)
    })

    return {width};
}