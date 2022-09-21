<template>
    <app-layout>

        <section class="overflow-x-hidden">
            <service-section class="py-20">
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
            </service-section>

            <section-white class="py-40">
                <div >
                        <div class="">
                            <ul class="flex sm:flex-row flex-wrap gap-20 pb-10">
                                <li class="bg-blue-500 text-center cursor-pointer text-zinc-10 rounded-md px-5 pt-2 pb-2">All works</li>
                                <li class="cursor-pointer">Web Developers</li>
                                <li class="cursor-pointer">Ecommerce</li>
                                <li class="cursor-pointer">Design</li>
                                <li class="cursor-pointer">App Design</li>
                            </ul>


                            <div class="grid grid-cols-2 sm:grid-cols-2 gap-6">
                                <div class="bg-zinc-200">
                                    <img src="./assets/samsunA1.svg" />
                                    <div class="block justify-start mx-20">
                                        <small class="text-zinc-500">Phone view 330px </small>
                                        <span class="leading-normal block">IBANK2ua</span>
                                    </div>
                                </div>
                                <div class="bg-zinc-200">
                                    <img src="./assets/laptop.svg" />
                                    <div class="block justify-start mx-20 py-10">
                                        <small class="text-zinc-500">Phone view 330px </small>
                                        <span class="leading-normal block">IBANK2ua</span>
                                    </div>

                                </div>
                                <div class="bg-zinc-200">
                                    <img src="./assets/samsunA1.svg" />
                                    <div class="block justify-start mx-20 py-5">
                                        <small class="text-zinc-500">Phone view 330px </small>
                                        <span class="leading-normal block">IBANK2ua</span>
                                    </div>
                                </div>

                                <div class="bg-zinc-200">
                                    <img src="./assets/laptop.svg" />
                                    <div class="block justify-start mx-20 py-10">
                                        <small class="text-zinc-500">Phone view 330px </small>
                                        <span class="leading-normal block">IBANK2ua</span>
                                    </div>
                                </div>
                                <div class="bg-zinc-200">
                                    <img src="./assets/samsunA1.svg" />
                                    <div class="block justify-start mx-20 py-10">
                                        <small class="text-zinc-500">Phone view 330px </small>
                                        <span class="leading-normal block">IBANK2ua</span>
                                    </div>
                                </div>
                                <div class="bg-zinc-200">
                                    <img src="./assets/laptop.svg" />
                                    <div class="block justify-start mx-20 py-10">
                                        <small class="text-zinc-500">Phone view 330px </small>
                                        <span class="leading-normal block">IBANK2ua</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </section-white>


            <service-section>
                    <div class="container mx-auto py-40 text-center">
                            <h1 class="font-light text-4xl leading-normal">
                                Let's talk about
                                <span class="md:inline-block block">business</span>
                            </h1>

                            <button class="md:w-1/5 mt-5 inline-flex items-center justify-center px-4 py-5 border border-transparent rounded-md shadow-sm text-base font-medium text-zinc-10 bg-blue-500">
                                <span>Contct us</span>
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
            </service-section>
        </section>
    </app-layout>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/layout/AppLayout.vue';
import ServiceSection from '@/components/section.vue'; 
import SectionWhite from '@/components/sectionwhite.vue';
export default defineComponent({
    name: "CaseStudy", 
    components: {
        AppLayout,
        SectionWhite,
        ServiceSection
    }
})
</script>