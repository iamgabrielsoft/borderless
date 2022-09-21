<template>
  <app-default>
    <section class="relative overflow-x-hidden">
      <!--top-section -->

      <section-white class="py-40">
       <!-- body component -->
        <div class="bg-zinc-10 block mb-10">
          <h1 class="sm:text-7xl text-4xl font-extrabold sm:inline-block">Efficient <span class="inline-block"> digital solutions</span></h1>
          <p class="block mt-5 mb-20">
            <span class="block">For Startups and SME's that are looking to solve that real life business challenges, complex
            or</span> <span class="">outine you can start with two-work test run today. Cancel anytime!</span>
          </p>

          <div class="flex sm:flex-row flex-col gap-6">
            <button class="sm:w-1/4 w-3/4 inline-flex items-center justify-center px-4 py-5 border border-transparent rounded-md shadow-sm text-base font-medium text-zinc-10 bg-blue-500">
              Get in touch
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>

            <button class="sm:w-1/4 w-3/4 inline-flex mt-5 text-blue-500 items-center py-5 justify-center px-4 font-medium">
              Gain Your Free Trial
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
     </section-white>

      <service-section class="py-40">
        <div class=" mb-20">
          <small class="text-zinc-500">SERVICES</small>
          <h1 class="font-light text-4xl leading-normal">What is our <span class="text-blue-500">goal?</span></h1>
          <p class="mt-5 block">
            <span class="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit, error eum aliquid omnis iure</span> 
            <span class="block">rem ullam quaerat sed placeat reprehenderit labore saepe, id molestiae a. Officiis  eum velit pariatur?</span>
          </p>
        </div>

        <div class="flex sm:flex-col flex-col justify-between gap-5">
          <!-- USING FLEX-BOX HERE -->
          <div class="flex gap-5 flex-col items-stretch sm:flex-row lg:flex-row">
          <!--first card-->
            <div class="sm:w-96 h-full max-w-sm px-6 py-4 pb-10 rounded-lg border border-zinc-400 shadow-lg">
              <DesktopComputerIcon class="w-20 h-20 text-blue-500"/>
              <h1 class="font-light text-3xl leading-normal">Web-development</h1>
              <p class="break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam, totam aut illo voluptatem necessitatibus laborum consectetur aspernatur, aperiam eum possimus quam molestias facilis optio, quis esse. Doloremque, aliquam officiis.</p>
              <p></p>
            </div>

                      <!-- second card-->
            <div class="sm:w-96 h-full max-w-sm  px-6 py-4 pb-10  rounded-lg border border-zinc-400 shadow-lg">
              <DeviceMobileIcon  class="w-20 h-20 text-blue-500"/>
              <h1 class="font-light text-3xl leading-normal inline">Mobile development</h1>
              <p class="break-all">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ab id 
                libero est odio, consequatur, quam exercitationem inventore expedita vitae illum
                libero est odio, consequatur, quam exercitationem inventore expedita vitae illum
              </p>
            </div>
          </div>

          <div class="flex gap-5 flex-col items-stretch sm:flex-row lg:flex-row">
            <!-- third card-->
            <div class="sm:w-96 h-full max-w-sm  px-4 py-4 pb-10  rounded-lg border border-zinc-400 shadow-lg">
              <DeviceTabletIcon class="w-20 h-20 text-blue-500"/>
              <h1 class="font-light text-3xl leading-normal">E-Commerce development</h1>
              <p class="break-all">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quasi voluptatum facere explicabo, in laudantium. Vero, molestias excepturi consequuntur adipisci recusandae cupiditate asperiores optio porro autem odio vel eius repellat?</p>
            </div>


                      <!-- fourth-->
            <div class="sm:w-96 h-full max-w-sm px-6 py-4 pb-10 rounded-lg border border-zinc-400 shadow-lg">
              <ChatIcon  class="w-20 h-20 text-blue-500"/>
              <h1 class="font-light text-3xl leading-normal ">Consultancy</h1>
              <p class="break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe eveniet dolorum itaque culpa placeat earum ea quia. Eligendi quam ea non. Officia, non rem debitis dolorum autem adipisci rerum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe eveniet dolorum itaque  
              </p>
            </div>
          </div>
        </div>
      </service-section>


      <!-- div why choose us-->
      <section-white class="py-40">
        <div >
          <small class="text-zinc-500">OUR BENEFITS</small>
          <h1 class="font-light text-4xl leading-normal">Case Studies</h1>
          <div class="sm:flex sm:items-center sm:justify-between">
            <p class="break-after-all leading-normal">
              <span class="block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis velit cupiditate, quos facere, consectetur natus reiciendis, 
                <span class="block">dolores atque maiores autem veniam. Sit numquam magnam repudiandae fuga beatae expedita, officiis nesciunt.</span></span>
            </p>
            <button class="hidden w-1/5 md:inline-flex items-center justify-center px-4 py-5 border border-transparent rounded-md shadow-sm text-base font-medium text-zinc-10 bg-blue-500">
              Access
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div class="mt-10">
            <div class="flex sm:flex-row flex-nowrap flex-col gap-6  ">
              <div class="bg-zinc-200 sm:flex-1">
                <img src="./assets/samsunA1.svg" />
                  <div class="block sm:justify-start md:mx-20 mx-2 py-5">
                    <small class="text-zinc-500">Phone view 330px </small>
                    <span class="leading-normal block">IBANK2ua</span>
                  </div>
                </div>
              
                <div class="bg-zinc-200 sm:flex-1 grow-0">
                  <img src="./assets/laptop.svg"/>
                  <div class="block sm:justify-start md:mx-20 mx-2 py-10">
                    <small class="text-zinc-500">Phone view 330px </small>
                    <span class="leading-normal block">IBANK2ua</span>
                    </div>

                  </div>
                  
                  <div class="bg-zinc-200 sm:flex-1">
                    <img src="./assets/samsunA1.svg" />
                     <div class="block sm:justify-start md:mx-20 mx-2 py-5">
                        <small class="text-zinc-500">Phone view 330px </small>
                        <span class="leading-normal block">IBANK2ua</span>
                       </div>
                  </div>
              </div>
          </div>
        </div>
      </section-white>

      <service-section class="py-40">
        <small class="text-zinc-500">TESTIMONIALS</small>
          <h1 class="font-light text-4xl leading-normal">Why choose <span class="text-blue-500">us</span>?</h1>
          <p class="block">
            <span class="block"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quia eos. Iusto, doloremque ad illo nobis consectetur voluptate, 
              <span class="block">ratione autem eum magni explicabo soluta, rerum sed inventore aspernatur voluptatum! Voluptates!</span>
              <span class="block">ratione autem eum magni explicabo soluta, rerum sed inventore aspernatur voluptatum! Voluptates!</span>
            </span>
          </p>


          <div class="sm:flex block sm:flex-row flex-col md:mx-0 md:space-x-10 mt-20">
              <div class="hidden md:inline-flex">

               
                <div class="border-zinc-500  border-2 rounded-md w-1 mr-1">
                  <p class="pl-1  bg-blue-500 text-zinc-200">l</p>
                </div>

                <ul class="block ml-2">
                  <li >
                    <span class="text-blue-500 cursor-pointer">Team</span>
                  </li>
                  
                  <li class="pt-10">
                    <span class="cursor-pointer">Communication</span>
                  </li>

                  <li class="pt-10">
                    <span class="cursor-pointer">Solution</span>
                  </li>

                  <li class="pt-10">
                    <span class="cursor-pointer">Quality</span>
                  </li>
                </ul>
              </div>

              <div class="md:flex-1 md:px-20">
                <h1 class="font-light text-4xl leading-normal text-blue-500">Close-knit team</h1>
                <p class="leading-normal break-before-all">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio facilis eos alias velit fugiat, repudiandae cupiditate? Numquam, delectus fuga. Rerum accusamus quod eos dolore? Odit nisi ullam consectetur et delectus?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur quidem veritatis, doloribus numquam quibusdam? Veniam eligendi, cumque, ad dignissimos nobis alias soluta ratione eaque possimus temporibus sit ipsum incidunt.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur quidem veritatis, doloribus numquam quibusdam? Veniam eligendi, cumque, ad dignissimos nobis alias soluta ratione eaque possimus temporibus sit ipsum incidunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur quidem veritatis, doloribus numquam quibusdam? Veniam eligendi, cumque, ad dignissimos nobis alias soluta ratione eaque possimus temporibus sit ipsum incidunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur quidem veritatis, doloribus numquam quibusdam? Veniam eligendi, cumque, ad dignissimos nobis alias soluta ratione eaque possimus temporibus sit ipsum incidunt.
                </p>
              </div>
            <hr class="border border-zinc-500 mt-2"/>
          </div>
      </service-section>


      <!-- what our client say-->
      <section-white class="py-40">
        <div>
          <small class="text-zinc-500">TESTIMONIALS</small>
          <h1 class="font-light text-4xl leading-normal">What our clients say</h1>
          <p class="break-all">
            <span class="block">We've would with entrepreneurs from Eastern Europe Germany and the USA.</span>
            <span class="block">See what there say about out work</span>
          </p>
          
          <div class="hidden md:flex justify-end">
            <PlayIcon class="w-20 h-20 text-blue-500"/>
          </div>

          <div class="flex sm:flex-row flex-row overflow-x-auto flex-wrap justify-evenly space-x-10 mt-5">
            <figure class="flex-1">
              <blockquote>
                <p class="text-2xl italic  text-zinc-500">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
              </blockquote>

              <figcaption class="flex justify-center items-center mt-6 space-x-6">
                <img class="w-20 h-20 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                  <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
              </figcaption>
            </figure>


            <figure class="flex-1">
              <blockquote>
                <p class="text-2xl italic text-zinc-500">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias distinctio praesentium modi itaque nemo labore omnis quaerat facere sed sapiente esse illo delectus, ex voluptate suscipit odio voluptatibus reiciendis. Repellat.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias distinctio praesentium modi itaque
                  
                  "</p>
              </blockquote>

              <figcaption class="flex justify-center items-center mt-6 space-x-6">
                <img class="w-20 h-20 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                  <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
              </figcaption>
            </figure>
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
  </app-default>

</template>



<script lang="ts">
import AppLayout from '@/layout/AppLayout.vue';
import AppDefault from '@/layout/AppDefault.vue';
import ServiceSection from '@/components/section.vue';
import SectionWhite from '@/components/sectionwhite.vue';
import { defineComponent } from 'vue';
import {
  DeviceMobileIcon,
  PlayIcon,
  DesktopComputerIcon,
  DeviceTabletIcon,
  ChatIcon, 
  PhoneIncomingIcon,
} from '@heroicons/vue/outline'; 

export default defineComponent({
    name: "Hompage", 
    components: {
      AppDefault,
      ServiceSection,
      SectionWhite,
      PlayIcon,
      DeviceMobileIcon,
      DesktopComputerIcon,
      ChatIcon,
      DeviceTabletIcon,
      PhoneIncomingIcon
    },

    created() {
      
    }

})
</script>