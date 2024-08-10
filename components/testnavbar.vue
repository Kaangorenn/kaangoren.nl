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
    <div class="w-screen h-[85px] backdrop-blur-lg fixed z-50">
        <div class="relative h-full w-full">
            <div class="absolute top-0 left-0 h-full px-5 grid place-items-center">
                <div class="relative">
                    <h1 class="text-4xl font-medium ">Kaan<span class="text-xl absolute top-0">™</span></h1>
                </div>
            </div>
            <div class="absolute top-0 right-0 h-full px-5 grid place-items-center">
                <div @click="toggleMenu" :class="{ 'bg-black rotate-[135deg]': !isMenuHidden }" class="h-14 w-14 hover:bg-black bg-zinc-200 rounded-full relative grid place-items-center transition-all duration-1000 group">
                    <svg class="h-12 w-12 top-[16px] left-[16px] absolute group-hover:fill-white transition-all duration-1000" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <transition name="slide">
        <div v-if="!mainStore.isMenuHidden" class="bg-zinc-300 w-screen h-screen fixed z-40 transition-all ease-in-out duration-1000">
            <div class="grid place-items-center h-full w-full">
                <div class="w-full grid grid-cols-1 gap-4 text-center text-4xl md:text-6xl lg:text-8xl -mt-10">
                    <NuxtLink @click="closeMenu" to="/" class="hover:bg-black hover:text-white ease-in-out duration-500">{{ home_navbar }}</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/about" class="hover:bg-black hover:text-white ease-in-out duration-500">{{ about_navbar }}</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/stack" class="hover:bg-black hover:text-white ease-in-out duration-500">{{ stack_navbar }}</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/portfolio" class="hover:bg-black hover:text-white ease-in-out duration-500">{{ portfolio_navbar }}</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/contact" class="hover:bg-black hover:text-white ease-in-out duration-500">{{ contact_navbar }}</NuxtLink>
                </div>
            </div>
            <div class="bg-zinc-100 dark:bg-black dark:text-white w-full h-20 fixed bottom-0">
                <div class="w-full h-full relative">
                    <div class="grid place-items-center absolute grid-cols-3 h-full px-5">
                        <NuxtLink @click="setLanguage('en')" :class="{ 'underline': selected_language === 'en' }" class="">{{ english }}</NuxtLink>
                        <NuxtLink @click="setLanguage('nl')" :class="{ 'underline': selected_language === 'nl' }" class="">{{ dutch }}</NuxtLink>
                        <NuxtLink @click="setLanguage('tr')" :class="{ 'underline': selected_language === 'tr' }" class="">{{ turkish }}</NuxtLink>
                    </div>
                    <div class="grid place-items-center h-full absolute right-0 px-5">
                        <NuxtLink @click="toggleDarkMode" class="">{{ darkmode_button }}</NuxtLink>
                    </div>
                    <!-- <div class="grid place-items-center h-full absolute right-0 px-5">
                        <NuxtLink @click.prevent="scrollToTop" class="">{{ scroll_button }}</NuxtLink>
                    </div> -->
                </div>
            </div>
        </div>
    </transition>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 1s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateY(0);
}

.text-slide-enter-active,
.text-slide-leave-active {
    transition: transform 1s ease-in-out;
}

.text-slide-enter-from,
.text-slide-leave-to {
    transform: translateY(-100%);
}

.text-slide-enter-to,
.text-slide-leave-from {
    transform: translateY(0);
}
</style>