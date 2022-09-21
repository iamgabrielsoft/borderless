<template>
    <header-white />
    <slot />
    <Footer />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import HeaderWhite from '@/components/HeaderWhite.vue';
import Footer from '@/components/Footer.vue';

const defaultLayout = 'AppLayoutDefault'
    
export default defineComponent({
    components: {
        HeaderWhite, 
        Footer
     }, 
    
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout; 
            return () => import(`@/layout/${layout}.vue`);
        }
    }
})
</script>
