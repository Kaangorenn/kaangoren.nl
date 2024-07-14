<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

const english = mainStore.texts[mainStore.language].navbar.language_selector.en;
const dutch = mainStore.texts[mainStore.language].navbar.language_selector.nl;
const turkish = mainStore.texts[mainStore.language].navbar.language_selector.tr;

onMounted(() => {
    window.scrollTo(0, 0);
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
        mainStore.darkMode = savedDarkMode === 'true';
        mainStore.applyDarkMode();
    }
});

const toggleDarkMode = () => {
    mainStore.darkMode = !mainStore.darkMode;
    // Save to localStorage
    localStorage.setItem('darkMode', mainStore.darkMode.toString());
    mainStore.applyDarkMode();
};
</script>
<template>
    <div data-aos="fade-down">
        <div :class="{ 'text-black bg-black/5': mainStore.isHovered }" class="h-24 w-screen bg-black/5 dark:bg-zinc-950/50 backdrop-blur-lg fixed text-black dark:text-white z-40 shadow-sm">
            <div class="grid place-items-center grid-cols-2 h-full w-full">
                <div class="h-full w-full grid place-items-center relative">
                    <div class="z-10 text-sm absolute left-3">
                        <!-- <NuxtLink @click="scrollToTop" to="/" class="">
                            <NuxtImg src="../public/white.png" class="h-24 p-8" />
                        </NuxtLink> -->
                    </div>
                </div>

                <!-- <NuxtLink to="#home" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">home</NuxtLink>
                <NuxtLink to="#about_me" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">about me</NuxtLink>
                <NuxtLink to="#portfolio" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">portfolio</NuxtLink>
                <NuxtLink to="#contact" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">contact</NuxtLink> -->
                <div class="h-full w-full grid place-items-center relative">
                    <div class="z-10 text-sm absolute right-8">
                        <button @click="toggleMenu" :class="['menuButton h-10 w-10', !isMenuHidden ? 'open' : '']" title="Open Menu">
                            <hr class="mx-2 mb-2 border-[1px] border-black dark:border-white" />
                            <hr class="mx-2 border-[1px] border-black dark:border-white" />
                        </button>
                    </div>
                    <!-- <div class="grid grid-cols-2">
                        <div class="flex items-center">
                            <button @click="toggleDarkMode" :class="{ 'bg-black dark:bg-zinc-800 dark:hover:bg-zinc-00': mainStore.darkMode, 'bg-gray-300': !mainStore.darkMode }" class="w-10 h-6 rounded-full p-1 hover:bg-gray-400 transition-colors duration-300">
                                <div :class="{ 'translate-x-4': mainStore.darkMode, 'translate-x-0': !mainStore.darkMode }" class="w-4 h-4 bg-white rounded-full transform transition-transform duration-300"></div>
                            </button>
                        </div>
                        <select @change="mainStore.setLanguage($event.target.value)" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">
                            <option value="en">{{ english }}</option>
                            <option value="nl">{{ dutch }}</option>
                            <option value="tr">{{ turkish }}</option>
                        </select>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

    <div data-aos="fade-up" class="fixed bottom-5 right-5 rounded-full p-2 backdrop-blur-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 hover:dark:bg-white/10 transition-colors duration-300">
        <NuxtLink @click.prevent="scrollToTop">
            <NuxtImg src="/icons/arrow.svg" class="h-10 w-10 dark:invert"></NuxtImg>
        </NuxtLink>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isMenuHidden: true,
        };
    },
    methods: {
        scrollToTop() {
            // Navigate to the root path
            this.$router.push('/').then(() => {
                // After navigation, scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        },
        toggleMenu() {
            this.isMenuHidden = !this.isMenuHidden;
        },
    },
}
</script>