<template>
    <header class="relative sm:border-2 border-zinc-500 ">
        <nav class="px-2 sm:px-4 py-2.5 rounded bg-zinc-200">
            <div class="max-w-7xl flex flex-wrap justify-between items-center mx-auto">
                <logo />
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden">
                <span class="sr-only">Open main menu</span>
                <hamburger />
                </button>

                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 rounded-lg boder md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                        <li>
                        <a href="/services" class="block py-2 pr-4 pl-3 text-white rounded md:p-0" aria-current="page">Services</a>
                        </li>
                        <li>
                        <a href="/case-study" class="block py-2 pr-4 pl-3 text-white rounded md:p-0" aria-current="page">Case studies</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded md:p-0" aria-current="page">About</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded md:p-0" aria-current="page">Contact us</a>
                        </li>
                        <li>
                        <a href="#" class="py-2 pr-4 pl-3 inline-flex text-white rounded md:p-0" aria-current="page">
                            
                            En
                            <chevron-down-icon class="ml-2 h-5 w-5 align-bottom" aria-label="true"/>
                        </a>
                        </li>

                        <li>
                            <button class="block py-2 pr-4 pl-3 border rounded px-5 mr-2 text-zinc-10 bg-blue-500">
                        Home
                        </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Hamburger from './Hamburger.vue';
import Logo from './Logo.vue';
import {
    ChevronDownIcon, 
    ArrowCircleDownIcon
} from '@heroicons/vue/outline'


export default defineComponent({
    name: "Header",
    components: {
        ChevronDownIcon,
        Hamburger,
        Logo,
    }
})
</script>