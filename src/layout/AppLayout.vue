<template>
    <Header />
     <slot />
    <Footer />
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue';
import Footer from '@/components/Footer.vue';
const defaultLayout = 'AppLayoutDefault'

export default defineComponent({
    components: {
        Header, 
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