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
    <div id="footer" class="w-screen h-full bg-zinc-100 dark:bg-zinc-950 hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="h-full w-full grid grid-cols-1 gap-1 place-items-center text-center dark:text-white text-black p-5">
                <div class="w-full py-3">
                    <NuxtLink to="#home" class="hover:underline ease-in-out duration-300">home</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#about_me" class="hover:underline ease-in-out duration-300">about</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#technologies" class="hover:underline ease-in-out duration-300">technologies</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#portfolio" class="hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#contact" class="hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
            <div class="h-full w-full grid grid-cols-1 gap-1 place-items-center text-center dark:text-white text-black p-5">
                <div class="w-full py-3">
                    <NuxtLink to="#home" class="hover:underline ease-in-out duration-300">change language</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink @click="toggleDarkMode" class="hover:underline ease-in-out duration-300">toggle darkmode</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#technologies" class="hover:underline ease-in-out duration-300">scroll to top</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#portfolio" class="hover:underline ease-in-out duration-300">portfolio</NuxtLink>
                </div>
                <div class="w-full py-3">
                    <NuxtLink to="#contact" class="hover:underline ease-in-out duration-300">contact</NuxtLink>
                </div>
            </div>
        </div>

    </div>
    <section id="footer" class="w-full bg-black text-white text-center py-3">
        <span>© 2024 kaan, {{ copyright }}.</span>
    </section>
</template>