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

const isMenuHidden = computed(() => mainStore.isMenuHidden);

const toggleMenu = () => {
    mainStore.isMenuHidden = !mainStore.isMenuHidden;
};

onMounted(() => {
    window.scrollTo(0, 0);
    const savedDarkMode = localStorage.getItem('darkMode');
    mainStore.darkMode = savedDarkMode === 'true';
    mainStore.applyDarkMode();
});

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
</script>
<template>
    <div data-aos="fade-down">
        <div :class="{ 'bg-black text-white': isMenuHidden }" class="h-[100px] w-screen bg-white/5 dark:bg-black/5 backdrop-blur-lg fixed text-black dark:text-white z-40">
            <div class="grid place-items-center grid-cols-12 h-full w-full">
                <div class="h-full w-full grid place-items-center col-span-9 relative">
                    <div class="z-10 text-sm absolute left-5">
                        <NuxtLink @click="scrollToTop" to="/" class="">
                            <h1 class="text-lg sm:xl bg-black dark:bg-white dark:text-black text-white p-4 font-bold">selcuk kaan goren™</h1>
                        </NuxtLink>
                    </div>
                </div>
                <div class="h-full w-full grid place-items-center relative col-span-3">
                    <div @click="toggleMenu" class="z-10 text-sm absolute right-5 bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  p-[10px] transition-colors duration-300 cursor-pointer">
                        <button :class="['menuButton h-10 w-10', !isMenuHidden ? 'open' : '']" title="Open Menu">
                            <hr class="mx-2 mb-2 border-[1px] border-white dark:border-black" />
                            <hr class="mx-2 border-[1px] border-white dark:border-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!mainStore.isMenuHidden" class="w-screen md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw]  h-full bg-black/5 right-0 dark:bg-zinc-950/50 backdrop-blur-2xl fixed transition-colors duration-300 z-20">
            <div class="mt-[100px] grid grid-rows-5 text-center text-white dark:text-black m-5 pt-5 gap-1">
                <div class="grid place-items-center">
                    <NuxtLink to="#home" @click="closeMenu" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75 h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">home</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#about_me" @click="closeMenu" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">about</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#technologies" @click="closeMenu" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">stack</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#portfolio" @click="closeMenu" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">portfolio</NuxtLink>
                </div>
                <div class="grid place-items-center">
                    <NuxtLink to="#contact" @click="closeMenu" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">contact</NuxtLink>
                </div>
            </div>
            <div class="fixed bottom-5 w-full px-5">
                <div class="grid grid-rows-3 lg:grid-cols-1 lg:grid-rows-2 text-center text-white dark:text-black gap-1">
                    <div class="grid place-items-center grid-cols-3 gap-1">
                        <NuxtLink @click="toggleDarkMode" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer hidden">english</NuxtLink>
                        <NuxtLink @click="toggleDarkMode" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer hidden">dutch</NuxtLink>
                        <NuxtLink @click="toggleDarkMode" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer hidden">turkish</NuxtLink>
                    </div>
                    <div class="grid place-items-center">
                        <NuxtLink @click="toggleDarkMode" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">toggle darkmode</NuxtLink>
                    </div>
                    <div class="grid place-items-center">
                        <NuxtLink @click.prevent="scrollToTop" class="bg-black hover:bg-black/75 dark:bg-white dark:hover:bg-white/75  h-full w-full p-3 md:p-5 transition-colors duration-300 cursor-pointer">scroll to top</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
