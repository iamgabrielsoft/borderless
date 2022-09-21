<template>
    <header class="relative sm:border-2 border-zinc-500">
        <nav class="px-2 sm:px-4 py-2.5 rounded bg-zinc-10">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <logo />
                <button @click="toggleNavbar" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden">
                    <hamburger />
                </button>

                <transition >
                    <div class="w-full md:flex md:w-auto inner" id="navbar-default">
                        <transition name="nested" >
                            <ul :class="!showMenu ? 'flex flex-col p-4 mt-4 rounded-lg boder md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium' : 'hidden'">
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
                        </transition>

                    </div>
                </transition>

            </div>
        </nav>
    </header>
</template>



<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import {
    ChevronDownIcon, 
} from '@heroicons/vue/outline'

import Hamburger from './Hamburger.vue';
import Logo from './Logo.vue'; 
    
export default defineComponent({
    name: "Header",
    components: {
        ChevronDownIcon,
        Hamburger, 
        Logo
    }, 

    emits: ['open:Navbar', 'close:Navbar'],
 

    setup() {
        let showMenu = ref<boolean>(false); 
        let mobileSize = Math.min(window.screen.width, window.screen.height);  //mobile-screen size
        const toggleNavbar = ()  => (showMenu.value = !showMenu.value); 

        onMounted(() => {
            if(mobileSize < 768) {
                showMenu.value = true; 

            }else if(mobileSize >= 768) {
                showMenu.value = false; 
            }
            
            else {
                showMenu.value = false; 
            } 
        }); 

        return { showMenu, toggleNavbar, mobileSize }; 
    },
})
</script>