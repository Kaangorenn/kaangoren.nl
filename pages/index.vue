<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

//home section
const job_title = mainStore.texts[mainStore.language].home.job_title;

//about section

//about
const about_title = mainStore.texts[mainStore.language].about.about.title;
const about_description = mainStore.texts[mainStore.language].about.about.description;
const about_description_2 = mainStore.texts[mainStore.language].about.about.description_2;
const read_more_button = mainStore.texts[mainStore.language].about.about.read_more_button;

//technologies
const technologies_title = mainStore.texts[mainStore.language].about.technologies.title;
const technologies_description = mainStore.texts[mainStore.language].about.technologies.description;
const technologies_description_2 = mainStore.texts[mainStore.language].about.technologies.description_2;

//portfolio section
const portfolio_title = mainStore.texts[mainStore.language].portfolio.title;
const portfolio_description = mainStore.texts[mainStore.language].portfolio.description;
const portfolio_button = mainStore.texts[mainStore.language].portfolio.github_button;

</script>
<template>
    <section id="home" class="min-h-screen w-screen bg-white dark:bg-black transition-colors duration-300 ease-in-out grid place-items-center text-white z-10">
        <div>
            <div class="grid place-items-center">
                <div data-aos="fade-down" data-aos-delay="800" class="rounded-full overflow-hidden h-56 w-56 2xl:h-96 2xl:w-96 my-5 drop-shadow-lg dark:drop-shadow-none">
                    <NuxtImg src="../public/header.jpg" class="-mt-10 scale-125 ml-2 ease-in-out duration-300" />
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                    <h1 class="text-4xl md:text-6xl 2xl:text-8xl font-semibold text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">selçuk kaan gören</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="1500" class="text-black mt-2">
                    <h2 class="text-lg md:text-2xl 2xl:text-4xl font-semibold text-zinc-400 text-center drop-shadow-lg dark:drop-shadow-none">{{ job_title }}</h2>
                </div>
            </div>
        </div>
    </section>
    <section id="about_me" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300">
        <div>
            <div class="grid grid-cols-1 h-full w-full gap-10 pt-24">
                <div class="p-10 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="400" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ about_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="800" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ about_description }}</p>
                        <br>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="800" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ about_description_2 }}</p>
                        <br>
                        <br>
                        <div data-aos="fade-up">
                            <NuxtLink data-aos-anchor-placement="bottom-bottom" to="https://github.com/Kaangorenn?tab=repositories" target="_blank" class="text-md bg-black p-5 lg:text-2xl 2xl:text-4xl text-white dark:text-black drop-shadow-lg dark:drop-shadow-none hover:text-">{{ read_more_button }}</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="p-10 transition-colors duration-300">
                    <div class="h-full w-full">
                        <div class="">
                            <h1 data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="400" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ technologies_title }}</h1>
                        </div>
                        <br>
                        <br>
                        <p data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="800" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ technologies_description }}</p>
                        <br>
                        <p data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1200" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ technologies_description_2 }}</p>
                        <br>
                        <br>
                        <div class="grid grid-cols-3 gap-8 items-start">
                            <div class="h-full w-full grid place-items-center rounded-lg">
                                <NuxtImg data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1600" src="../public/icons/nuxt.png" class="p-5 h-32 w-44" />
                            </div>
                            <div class="h-full w-full grid place-items-center rounded-lg">
                                <NuxtImg data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1600" src="../public/icons/laravel.png" class="p-5 h-32 w-32" />
                            </div>
                            <div class="h-full w-full grid place-items-center">
                                <NuxtImg data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1600" src="../public/icons/tailwind.png" class="p-5 h-32 w-44" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
    <section id=" portfolio" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300">
        <div>
            <div class="grid grid-cols-1 h-full w-full gap-10 pt-24">
                <div class="p-10 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ portfolio_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ portfolio_description }}</p>
                        <br>
                        <br>
                        <div data-aos="fade-up">
                            <NuxtLink data-aos-anchor-placement="bottom-bottom" to="https://github.com/Kaangorenn?tab=repositories" target="_blank" class="text-md bg-black p-5 lg:text-2xl 2xl:text-4xl text-white dark:text-black drop-shadow-lg dark:drop-shadow-none hover:text-">{{ portfolio_button }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300">
        <div>
            <div class="grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-10 pt-24">
                <div class="p-10 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ about_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ about_description }}</p>
                    </div>
                </div>
                <div class="p-10 transition-colors duration-300">
                    <div class="h-full w-full">
                        <div class="">
                            <h1 data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ technologies_title }}</h1>
                        </div>

                        <br>
                        <br>
                        <p data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ technologies_description }}</p>
                        <br>
                        <p data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ technologies_description_2 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
