<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

</script>
<template>
    <div data-aos="fade-down">
        <div :class="{ 'text-black bg-black/5': mainStore.isHovered }" class="h-24 w-screen bg-black/5 dark:bg-white/5 backdrop-blur-lg fixed text-black dark:text-white z-50">
            <div class="grid place-items-center grid-cols-4 h-full w-full">
                <!-- <NuxtLink to="#home" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">home</NuxtLink> -->
                <NuxtLink to="#about_me" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">about me</NuxtLink>
                <NuxtLink to="#portfolio" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">portfolio</NuxtLink>
                <NuxtLink to="#contact" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">contact</NuxtLink>
                <select @change="changeLanguage($event.target.value)" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">
                    <option value="en">🇬🇧󠁧󠁢󠁥 english</option>
                    <option value="nl">🇳🇱 dutch</option>
                    <option value="tr">🇹🇷 turkish</option>
                </select>
            </div>
        </div>
    </div>
    <div class="grid place-items-center">
        <div class="fixed top-32 right-10 bg-black/5 dark:bg-white/5 backdrop-blur-lg py-5 cursor-pointer z-50">
            <a @click="mainStore.toggleTheme()" class="text-black dark:text-white p-5">{{ mainStore.darkmode ? 'toggle lightmode' : 'toggle darkmode' }}</a>
        </div>
    </div>
</template>
<script>

</script>
