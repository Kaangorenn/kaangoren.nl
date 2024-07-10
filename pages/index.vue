<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();
</script>
<template>
    <section id="home" :class="{ 'bg-gradient-to-l from-indigo-200 to-yellow-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black': mainStore.isHovered }" class="h-screen w-screen bg-white dark:bg-black transition-colors duration-300 ease-in-out grid place-items-center text-white z-10">
        <div>
            <div class="grid place-items-center">
                <div data-aos="fade-down" data-aos-delay="700" class="rounded-full overflow-hidden h-56 w-56 m-5">
                    <NuxtImg src="../public/header.jpg" class="-mt-10 scale-125 ml-2 hover:scale-150 ease-in-out duration-300" />
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                    <h1 :class="{ 'text-black': mainStore.isHovered }" class="text-6xl font-semibold hover:underline cursor-pointer text-black dark:text-white" @mouseover="mainStore.toggleHover(true)" @mouseleave="mainStore.toggleHover(false)">@kaangoren</h1>
                </div>
            </div>
        </div>
    </section>
    <section id="about_me" class="h-screen w-screen bg-black grid place-items-center text-white">
        <div class="bg-white/10 backdrop-blur-md rounded-lg drop-shadow-lg p-8 shadow-white">
            <h1 class="text-6xl font-semibold underline">who am i?</h1>
        </div>
    </section>
    <section id="portfolio" class="h-screen w-screen bg-black grid place-items-center text-white">
        <div class="bg-white/10 backdrop-blur-md rounded-lg drop-shadow-lg p-8 shadow-white">
            <h1 class="text-6xl font-semibold underline">porftolio</h1>
        </div>
    </section>
    <section id="contact" class="h-screen w-screen bg-black grid place-items-center text-white">
        <div class="bg-white/10 backdrop-blur-md rounded-lg drop-shadow-lg p-8 shadow-white">
            <h1 class="text-6xl font-semibold underline">contact</h1>
        </div>
    </section>
    <section id="home" class="h-screen w-screen bg-gradient-to-b from-black to-gray-900 grid place-items-center text-white">
        <div class="bg-white/10 backdrop-blur-md rounded-lg drop-shadow-lg p-8 shadow-white">
            <h1 class="text-6xl font-semibold underline">kaangoren.nl</h1>
        </div>
    </section>
    <section id="portfolio" class="h-screen w-screen bg-gradient-to-b from-gray-900 to-sky-950 grid place-items-center text-white">
        <h1 class="text-8xl font-semibold underline">Hello world!</h1>
    </section>
    <section id="contact" class="h-screen w-screen bg-green-200 grid place-items-center">
        <h1 class="text-8xl font-semibold underline">Hello world!</h1>
    </section>
</template>
