<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();
</script>
<template>
    <section id="home" :class="{ 'bg-orange-500 dark:orange-500': mainStore.isHovered }" class="h-screen w-screen bg-white dark:bg-black transition-colors duration-300 ease-in-out grid place-items-center text-white z-10">
        <div>
            <div class="grid place-items-center">
                <div data-aos="fade-down" data-aos-delay="700" class="rounded-full overflow-hidden h-56 w-56 m-5">
                    <NuxtImg src="../public/header.jpg" class="-mt-10 scale-125 ml-2 ease-in-out duration-300" />
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                    <h1 to="/" :class="{ 'text-black': mainStore.isHovered }" class="text-6xl font-semibold hover:underline cursor-pointer text-black dark:text-white" @mouseover="mainStore.toggleHover(true)" @mouseleave="mainStore.toggleHover(false)">selçuk kaan gören</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="1500" class="text-black">
                    <h2 class="text-2xl font-semibold text-zinc-400 text-center">{{ mainStore.texts[mainStore.language].home.job_title }}</h2>
                    {{ mainStore.texts[mainStore.language] }}
                </div>
            </div>
        </div>
    </section>
    <section id="home" :class="{ 'bg-orange-500 dark:orange-500': mainStore.isHovered }" class="h-screen w-screen p-5 bg-white dark:bg-black transition-colors duration-300 ease-in-out z-10">

        <div class="rounded-lg bg-zinc-100 dark:bg-zinc-900 w-full h-full grid grid-cols-2">
            <div class="grid place-items-center">
                <div data-aos="fade-down" class="rounded-lg overflow-hidden h-96 w-96 m-5">
                    <NuxtImg src="../public/header.jpg" class="-mt-10 scale-125 ml-2 ease-in-out duration-300" />
                </div>
            </div>
            <div class="grid place-items-center dark:text-white">
                <div class="mx-56">
                    <h1 class="text-6xl font-bold">wie ben ik?</h1>
                    <br>
                    <p class="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos quaerat excepturi autem odio, rem voluptatum a minima totam fugit ab. Dicta eveniet, sunt dolore maiores placeat eligendi cum vel!</p>
                </div>
            </div>

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
