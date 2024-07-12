<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

//home section
const job_title = mainStore.texts[mainStore.language].home.job_title;

//about section

//about
const about_title = mainStore.texts[mainStore.language].about.about.title;
const about_description = mainStore.texts[mainStore.language].about.about.description;

//technologies
const technologies_title = mainStore.texts[mainStore.language].about.technologies.title;
const technologies_description = mainStore.texts[mainStore.language].about.technologies.description;
const technologies_list = mainStore.texts[mainStore.language].about.technologies.list;
</script>
<template>
    <section id="home" :class="{ 'bg-zinc-100': mainStore.isHovered }" class="h-screen w-screen bg-white dark:bg-black transition-colors duration-300 ease-in-out grid place-items-center text-white z-10">
        <div>
            <div class="grid place-items-center">
                <div data-aos="fade-down" data-aos-delay="700" class="rounded-full overflow-hidden h-56 w-56 my-5">
                    <NuxtImg src="../public/header.jpg" class="-mt-10 scale-125 ml-2 ease-in-out duration-300" />
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                    <h1 to="/" :class="{ 'text-black': mainStore.isHovered }" class="text-4xl md:text-6xl font-semibold hover:underline cursor-pointer text-black dark:text-white" @mouseover="mainStore.toggleHover(true)" @mouseleave="mainStore.toggleHover(false)">selçuk kaan gören</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="1500" class="text-black mt-2">
                    <h2 class="text-lg md:text-2xl font-semibold text-zinc-400 text-center">{{ job_title }}</h2>
                </div>
            </div>
        </div>
    </section>
    <section id="portfolio" class="h-screen w-screen grid place-items-center text-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-10">
            <div class="bg-zinc-100 dark:bg-zinc-900 p-10 lg:rounded-r-lg">
                <div class="grid place-items-center h-full w-full">
                    <div class=" text-center">
                        <h1 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-6xl text-black dark:text-white">{{ technologies_title }}</h1>
                        <br>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-lg text-black dark:text-white">{{ technologies_description }}</p>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-lg text-black dark:text-white ">{{ technologies_list }}</p>
                    </div>
                    <div class=" text-center">
                        <h1 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-6xl text-black dark:text-white">{{ about_title }}</h1>
                        <br>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-lg text-black dark:text-white">{{ about_description }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-zinc-100 dark:bg-zinc-900 p-10 lg:rounded-l-lg">
                <div class="grid place-items-center h-full w-full">
                    <div class="text-center">
                        <h1 data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-6xl text-black dark:text-white">{{ about_title }}</h1>
                        <br>
                        <p data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-lg text-black dark:text-white">{{ about_description }}</p>
                    </div>
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
</template>
