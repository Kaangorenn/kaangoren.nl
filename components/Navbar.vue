<script setup>
import { useMainStore } from '~/stores/mainStore';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const mainStore = useMainStore();
const router = useRouter();

// Use computed properties for reactive language texts
const english = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.en);
const dutch = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.nl);
const turkish = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.tr);

const home_navbar = computed(() => mainStore.texts[mainStore.language].navbar.home);
const about_navbar = computed(() => mainStore.texts[mainStore.language].navbar.about);
const stack_navbar = computed(() => mainStore.texts[mainStore.language].navbar.stack);
const portfolio_navbar = computed(() => mainStore.texts[mainStore.language].navbar.portfolio);
const contact_navbar = computed(() => mainStore.texts[mainStore.language].navbar.contact);

const darkmode_button = computed(() => mainStore.texts[mainStore.language].navbar.darkmode_button);
const scroll_button = computed(() => mainStore.texts[mainStore.language].navbar.scroll_button);

const isMenuHidden = computed(() => mainStore.isMenuHidden);
const selected_language = computed(() => mainStore.language);
const page = computed(() => mainStore.page);

const toggleMenu = () => {
    mainStore.isMenuHidden = !mainStore.isMenuHidden;
};

const toggleDarkMode = () => {
    mainStore.darkMode = !mainStore.darkMode;
    localStorage.setItem('darkMode', mainStore.darkMode.toString());
    mainStore.applyDarkMode();
};

const scrollToTop = () => {
    router.push('/').then(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        mainStore.isMenuHidden = true;
    });
};

const closeMenu = () => {
    mainStore.isMenuHidden = true;
};

const setLanguage = (language) => {
    mainStore.language = language;
    localStorage.setItem('language', language);
};


onMounted(() => {
    window.scrollTo(0, 0);
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');
    mainStore.darkMode = savedDarkMode === 'true';
    mainStore.language = savedLanguage || 'en';
    mainStore.applyDarkMode();
});
</script>
<template>
    <div data-aos="fade-down">
        <div :class="{ 'bg-black text-white': isMenuHidden }" class="h-[100px] w-screen bg-zinc-200 dark:bg-zinc-400 backdrop-blur-lg fixed text-black dark:text-white z-40">
            <div class="grid place-items-center grid-cols-12 h-full w-full">
                <div class="h-full w-full grid place-items-center col-span-9 relative">
                    <div class="z-10 text-sm absolute left-5">
                        <NuxtLink @click="scrollToTop" to="/" class="">
                            <h1 class="text-lg sm:xl bg-black dark:bg-white dark:text-black text-white p-4 font-bold">selcuk kaan goren™</h1>
                        </NuxtLink>
                    </div>
                </div>
                <div class="h-full w-full grid place-items-center relative col-span-3">
                    <div @click="toggleMenu" class="z-10 text-sm absolute right-5 bg-black dark:bg-white  p-[10px] transition-colors duration-300 cursor-pointer">
                        <button :class="['menuButton h-10 w-10', !isMenuHidden ? 'open' : '']" title="Open Menu">
                            <hr class="mx-2 mb-2 border-[1px] border-white dark:border-black" />
                            <hr class="mx-2 border-[1px] border-white dark:border-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!mainStore.isMenuHidden" class="w-screen md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] h-full bg-black/5 right-0 dark:bg-white/5 backdrop-blur-2xl fixed transition-colors duration-300 z-20">
            <div class="mt-[100px] grid grid-rows-5 text-center text-white dark:text-black m-5 pt-5 gap-1">
                <div class="grid place-items-center">
                    <NuxtLink to="#home" @click="closeMenu" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': page === 'home' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ home_navbar }}</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#about_me" @click="closeMenu" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': page === 'about_me' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ about_navbar }}</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#technologies" @click="closeMenu" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': page === 'technologies' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ stack_navbar }}</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#portfolio" @click="closeMenu" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': page === 'portfolio' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ portfolio_navbar }}</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#contact" @click="closeMenu" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': page === 'contact' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ contact_navbar }}</NuxtLink>
                </div>
            </div>
            <div class="fixed bottom-5 w-full px-5">
                <div class="grid grid-rows-3 lg:grid-cols-1 lg:grid-rows-2 text-center text-white dark:text-black gap-1">
                    <div class="grid place-items-center grid-cols-3 gap-1">
                        <NuxtLink @click="setLanguage('en')" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': selected_language === 'en' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ english }}</NuxtLink>
                        <NuxtLink @click="setLanguage('nl')" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': selected_language === 'nl' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ dutch }}</NuxtLink>
                        <NuxtLink @click="setLanguage('tr')" :class="{ 'bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black': selected_language === 'tr' }" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ turkish }}</NuxtLink>
                    </div>
                    <div class="grid place-items-center">
                        <NuxtLink @click="toggleDarkMode" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ darkmode_button }}</NuxtLink>
                    </div>
                    <div class="grid place-items-center">
                        <NuxtLink @click.prevent="scrollToTop" class="bg-black dark:bg-white h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">{{ scroll_button }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>