<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

const copyright = mainStore.texts[mainStore.language].footer.copyright;

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
    <div class="w-screen bg-zinc-100 dark:bg-black">
        <div class="h-full w-full grid grid-cols-1 lg:grid-cols-3 place-items-center dark:text-white text-black">
            <div class="h-full w-full">
                <div class="p-10 text-xl md:text-2xl">
                    <NuxtLink to="#home" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">home</NuxtLink>
                    <br>
                    <NuxtLink to="#about_me" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">about</NuxtLink>
                    <br>
                    <NuxtLink to="#portfolio" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                    <br>
                    <NuxtLink to="#contact" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
            <div class="bg-blue-200 h-full w-full">
                <div class="p-10 text-xl md:text-2xl">
                    <NuxtLink to="#home" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">home</NuxtLink>
                    <br>
                    <NuxtLink to="#about_me" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">about</NuxtLink>
                    <br>
                    <NuxtLink to="#portfolio" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                    <br>
                    <NuxtLink to="#contact" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
            <div class="bg-green-200 h-full w-full">
                <div class="p-10 text-xl md:text-2xl">
                    <NuxtLink @click="toggleDarkMode" to="#about_me" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">toggle darkmode</NuxtLink>
                    <br>
                    <NuxtLink to="#about_me" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">about</NuxtLink>
                    <br>
                    <NuxtLink to="#portfolio" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                    <br>
                    <NuxtLink to="#contact" class="hover:text-black/60 dark:hover:text-white/60 hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div class="w-screen bg-black text-white text-center py-3">
        <span>© 2024 kaan, {{ copyright }}.</span>
    </div>
</template>