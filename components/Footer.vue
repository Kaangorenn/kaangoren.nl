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
    mainStore.applyDarkMode();
};
</script>
<template>
    <div class="w-screen bg-zinc-100 dark:bg-zinc-950">
        <div class="h-full w-full grid grid-cols-1 lg:grid-cols-3 place-items-center dark:text-white text-black">
            <div class="h-full w-full">
                <div class="p-10 text-xl md:text-2xl text-center">
                    <NuxtLink to="#home" class="hover:underline ease-in-out duration-300">home</NuxtLink>
                    <br>
                    <NuxtLink to="#about_me" class="hover:underline ease-in-out duration-300">about</NuxtLink>
                    <br>
                    <NuxtLink to="#portfolio" class="hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                    <br>
                    <NuxtLink to="#contact" class="hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
            <div class="h-full w-full">
                <div class="p-10 text-xl md:text-2xl text-center">
                    <NuxtLink to="#home" class="hover:underline ease-in-out duration-300">home</NuxtLink>
                    <br>
                    <NuxtLink to="#about_me" class="hover:underline ease-in-out duration-300">about</NuxtLink>
                    <br>
                    <NuxtLink to="#portfolio" class="hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                    <br>
                    <NuxtLink to="#contact" class="hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
            <div class="h-full w-full">
                <div class="p-10 text-xl md:text-2xl text-center">
                    <NuxtLink @click="toggleDarkMode" class="hover:underline ease-in-out duration-300 cursor-pointer">toggle darkmode</NuxtLink>
                    <br>
                    <NuxtLink to="#about_me" class="hover:underline ease-in-out duration-300">about</NuxtLink>
                    <br>
                    <NuxtLink to="#portfolio" class="hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                    <br>
                    <NuxtLink to="#contact" class="hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div class="w-screen bg-black text-white text-center py-3">
        <span>© 2024 kaan, {{ copyright }}.</span>
    </div>
</template>