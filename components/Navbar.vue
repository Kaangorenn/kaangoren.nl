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
    mainStore.applyDarkMode(); // Apply the dark mode
};
</script>
<template>
    <div data-aos="fade-down">
        <div :class="{ 'text-black bg-black/5': mainStore.isHovered }" class="h-24 w-screen bg-black/5 dark:bg-white/5 backdrop-blur-lg fixed text-black dark:text-white z-50">
            <div class="grid place-items-center grid-cols-4 lg:grid-cols-5 h-full w-full">
                <NuxtLink to="#home" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">home</NuxtLink>
                <NuxtLink to="#about_me" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">about me</NuxtLink>
                <NuxtLink to="#portfolio" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">portfolio</NuxtLink>
                <NuxtLink to="#contact" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 dark:hover:text-white/60 ease-in-out duration-300">contact</NuxtLink>
                <div class="hidden lg:block">
                    <div class="grid grid-cols-2">
                        <div class="flex items-center">
                            <!-- Toggle Button -->

                            <button @click="toggleDarkMode" :class="{ 'bg-black dark:bg-zinc-800 dark:hover:bg-zinc-00': mainStore.darkMode, 'bg-gray-300': !mainStore.darkMode }" class="w-10 h-6 rounded-full p-1 hover:bg-gray-400 transition-colors duration-300">
                                <!-- Circle -->
                                <div :class="{ 'translate-x-4': mainStore.darkMode, 'translate-x-0': !mainStore.darkMode }" class="w-4 h-4 bg-white rounded-full transform transition-transform duration-300"></div>
                            </button>
                        </div>
                        <select @change="mainStore.setLanguage($event.target.value)" class="text-xl md:text-2xl h-full w-full grid place-items-center hover:text-black/60 ease-in-out duration-300">
                            <option value="en">{{ english }}</option>
                            <option value="nl">{{ dutch }}</option>
                            <option value="tr">{{ turkish }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>
