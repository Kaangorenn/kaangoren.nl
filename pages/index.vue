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
const portfolio_description_2 = mainStore.texts[mainStore.language].portfolio.description_2;
const portfolio_button = mainStore.texts[mainStore.language].portfolio.github_button;

//contact section
const contact_title = mainStore.texts[mainStore.language].contact.title;
const contact_description = mainStore.texts[mainStore.language].contact.description;
const contact_email_button = mainStore.texts[mainStore.language].contact.email;
const contact_linkedin_button = mainStore.texts[mainStore.language].contact.linkedin;
</script>
<template>
    <section id="home" class="min-h-screen w-screen bg-white dark:bg-black transition-colors duration-300 ease-in-out grid place-items-center text-white z-10">
        <div>
            <div class="grid place-items-center">
                <div data-aos="fade-down" data-aos-delay="800" class="rounded-full overflow-hidden h-56 w-56 2xl:h-72 2xl:w-72 my-5 drop-shadow-lg dark:drop-shadow-none">
                    <NuxtImg src="../public/header.jpg" class="-mt-10 scale-125 ml-2 ease-in-out duration-300" />
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                    <h1 class="text-4xl md:text-6xl 2xl:text-7xl font-semibold text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">selçuk kaan gören</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="1500" class="text-black mt-2">
                    <h2 class="text-lg md:text-2xl 2xl:text-3xl font-semibold text-zinc-400 text-center drop-shadow-lg dark:drop-shadow-none">{{ job_title }}</h2>
                </div>
            </div>
        </div>
    </section>
    <section id="about_me" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300">
        <div>
            <div class="grid h-full w-full gap-10 pt-[75px]">
                <div class="py-10 px-5 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ about_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ about_description }}</p>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ about_description_2 }}</p>
                        <br>
                        <br>
                        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="2000">
                            <NuxtLink to="#technologies" class="text-md bg-black dark:bg-white p-5 lg:text-2xl 2xl:text-4xl text-white dark:text-black drop-shadow-lg dark:drop-shadow-none hover:text-">{{ read_more_button }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="technologies" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300 mb-10">
        <div>
            <div class="grid h-full w-full gap-10 pt-[75px]">
                <div class="py-10 px-5 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ technologies_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ technologies_description }}</p>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ technologies_description_2 }}</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 h-20 sm:h-24 md:h-32  justify-items-center">
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="2000" class="">
                    <svg class="w-full h-20 sm:h-24 md:h-32 inline dark:invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>nuxt</title>
                        <path d="M21.8 18.36L16.03 8.08C15.93 8 15.63 7.43 15.03 7.43C14.78 7.43 14.43 7.53 14.07 8.08L13.33 9.26L11.31 5.65C11.26 5.55 10.91 5 10.31 5C10.06 5 9.66 5.1 9.36 5.65L2.18 18.31C2.13 18.41 1.83 19 2.13 19.5C2.23 19.75 2.53 20 3.19 20H20.85C20.95 20 21.6 20 21.9 19.5C22 19.26 22.1 18.86 21.8 18.36M8.1 18.31L7.95 18.86H3.24L10.36 6.34L12.66 10.47L8.1 18.31M9.21 18.86L13.32 11.66L17.5 18.86H9.21M18.74 18.86L18.54 18.31L14 10.46L15.03 8.73L20.75 18.86H18.74Z"></path>
                    </svg>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="2500">
                    <svg class="w-full h-20 sm:h-24 md:h-32 inline dark:invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>laravel</title>
                        <path d="M21.7 6.53C21.71 6.55 21.71 6.58 21.71 6.61V10.9C21.71 11 21.65 11.12 21.56 11.17L17.95 13.25V17.36C17.95 17.47 17.9 17.57 17.8 17.63L10.28 21.96C10.26 21.97 10.24 22 10.22 22L10.2 22C10.15 22 10.09 22 10.04 22C10.03 22 10 22 10 22C10 22 10 21.97 9.96 21.96L2.44 17.63C2.35 17.58 2.29 17.47 2.29 17.36V4.5C2.29 4.45 2.29 4.42 2.3 4.4C2.3 4.39 2.31 4.38 2.31 4.37C2.31 4.35 2.32 4.34 2.33 4.32C2.33 4.31 2.34 4.3 2.35 4.29C2.36 4.28 2.37 4.27 2.38 4.26C2.39 4.25 2.4 4.24 2.41 4.23C2.42 4.22 2.43 4.21 2.44 4.21L6.2 2.04C6.3 2 6.42 2 6.5 2.04L10.28 4.21H10.28C10.29 4.22 10.3 4.22 10.31 4.23C10.32 4.24 10.33 4.25 10.34 4.26C10.35 4.27 10.36 4.28 10.37 4.29C10.38 4.3 10.39 4.31 10.39 4.32C10.4 4.34 10.41 4.35 10.41 4.37C10.41 4.38 10.42 4.39 10.42 4.4C10.43 4.43 10.43 4.45 10.43 4.5V12.5L13.57 10.72V6.61C13.57 6.58 13.57 6.55 13.58 6.53L13.59 6.5C13.59 6.5 13.6 6.47 13.61 6.45C13.61 6.44 13.62 6.43 13.63 6.42C13.64 6.41 13.65 6.4 13.66 6.39C13.67 6.38 13.68 6.37 13.69 6.36C13.7 6.35 13.71 6.34 13.72 6.34L17.5 4.17C17.58 4.11 17.7 4.11 17.8 4.17L21.56 6.34C21.57 6.34 21.58 6.35 21.59 6.36L21.62 6.39C21.63 6.4 21.64 6.41 21.65 6.42C21.66 6.43 21.66 6.44 21.67 6.45C21.68 6.47 21.68 6.5 21.69 6.5C21.7 6.5 21.7 6.5 21.7 6.53M21.09 10.72V7.15L17.95 8.95V12.5L21.09 10.72M17.33 17.18V13.6L10.43 17.54V21.15L17.33 17.18M2.91 5V17.18L9.81 21.15V17.54L6.21 15.5L6.2 15.5L6.2 15.5C6.19 15.5 6.18 15.5 6.17 15.47C6.16 15.47 6.15 15.46 6.14 15.45V15.45C6.13 15.44 6.12 15.43 6.11 15.42C6.1 15.41 6.1 15.4 6.09 15.39V15.39C6.08 15.37 6.08 15.36 6.07 15.35C6.07 15.33 6.06 15.32 6.06 15.31C6.05 15.3 6.05 15.28 6.05 15.27C6.05 15.25 6.05 15.24 6.05 15.23V6.82L2.91 5M6.36 2.68L3.23 4.5L6.36 6.28L9.5 4.5L6.36 2.68M9.81 12.88V5L6.67 6.82V14.69L9.81 12.88M17.64 4.8L14.5 6.61L17.64 8.41L20.77 6.61L17.64 4.8M17.33 8.95L14.19 7.15V10.72L17.33 12.5V8.95M10.12 17L17 13.06L13.88 11.26L7 15.23L10.12 17Z"></path>
                    </svg>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="3000">
                    <svg class="w-full h-20 sm:h-24 md:h-32 inline dark:invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>tailwind</title>
                        <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>
    <section id="portfolio" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300">
        <div>
            <div class="grid h-full w-full gap-10 pt-[75px]">
                <div class="py-10 px-5 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ portfolio_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ portfolio_description }}</p>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ portfolio_description_2 }}</p>
                        <br>
                        <br>
                        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="2000">
                            <NuxtLink to="https://github.com/Kaangorenn?tab=repositories" target="_blank" class="text-md bg-black dark:bg-white p-5 lg:text-2xl 2xl:text-4xl text-white dark:text-black drop-shadow-lg dark:drop-shadow-none hover:text-">{{ portfolio_button }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" class="min-h-screen w-screen text-white bg-white dark:bg-black transition-colors duration-300">
        <div>
            <div class="grid h-full w-full gap-10 pt-[75px]">
                <div class="py-10 px-5 transition-colors duration-300">
                    <div class="w-full h-full">
                        <div class="">
                            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500" class="text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white dark:text-black bg-black dark:bg-white py-5 px-5">{{ contact_title }}</h1>
                        </div>
                        <br>
                        <p data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000" class="text-md lg:text-2xl 2xl:text-4xl text-black dark:text-white drop-shadow-lg dark:drop-shadow-none">{{ contact_description }}</p>
                        <br>
                        <br>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <NuxtLink data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1500" to="mailto:info@kaangoren.nl" target="_blank" class="text-md bg-black dark:bg-white p-5 lg:text-2xl 2xl:text-4xl text-white dark:text-black text-center drop-shadow-lg dark:drop-shadow-none hover:text-">{{ contact_email_button }}</NuxtLink>

                            <NuxtLink data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="2000" to="https://www.linkedin.com/in/kaangoren/" target="_blank" class="text-md bg-black dark:bg-white p-5 lg:text-2xl 2xl:text-4xl text-white dark:text-black text-center drop-shadow-lg dark:drop-shadow-none hover:text-">{{ contact_linkedin_button }}</NuxtLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
