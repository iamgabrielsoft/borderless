<template>
    <section class="relative md:mx-0 mx-5 bg-zinc-200 ">
        <div class="mx-auto container">
            <div class="flex">
                <h2 class="leading-normal">HOME</h2>
                <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h2 class="text-zinc-500 leading-normal mx-5">SERVICES</h2>
            </div>

            <h1 class="text-5xl leading-normal pt-40">Our services</h1>
                <p class="pb-40 pt-10">We are developing websites of various completely - from landing pages and up to 
                <span class="block">makerplaces. We can also offer services in the context of IT and programming in that, we do everything we can to develop your business</span> 
            </p>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import {
    ArrowCircleDownIcon
} from '@heroicons/vue/outline'

export default defineComponent({
    components: {
        ArrowCircleDownIcon
    }
})
</script>