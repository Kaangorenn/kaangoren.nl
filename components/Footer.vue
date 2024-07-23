<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

const english = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.en);
const dutch = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.nl);
const turkish = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.tr);

const language_selector_text = computed(() => mainStore.texts[mainStore.language].navbar.language_selector_text);
const selected_language = computed(() => mainStore.language);
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
    if (window.innerWidth > 1024) {
        mainStore.isMenuHidden = false;
    } else {
        mainStore.isMenuHidden = true;
    }
});
</script>
<template>
    <div id="footer" style="background: linear-gradient(to right, #ffffff 50%, #000000 50%);" class="w-screen h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 mix-blend-difference">
            <div class="h-full w-full grid grid-cols-1 gap-1 place-items-center text-white text-center p-5">
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
            <div class="h-full w-full grid grid-cols-1 gap-1 place-items-center text-center text-white p-5 mix-blend-difference">
                <div class="w-full py-3">
                    <div class="inline-flex gap-2">
                        <NuxtLink class="cursor-pointer">{{ language_selector_text }}:</NuxtLink>
                        <div>
                            <NuxtLink @click="setLanguage('en')" :class="{ 'border p-1': selected_language === 'en' }" class="cursor-pointer">{{ english }}</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink @click="setLanguage('nl')" :class="{ 'border p-1': selected_language === 'nl' }" class="cursor-pointer">{{ dutch }}</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink @click="setLanguage('tr')" :class="{ 'border p-1': selected_language === 'tr' }" class="cursor-pointer">{{ turkish }}</NuxtLink>
                        </div>
                    </div>
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
    <section id="footer" style="background: linear-gradient(to right, #000000 50%, #ffffff 50%);" class="w-full text-center">
        <h1>© 2024 kaan, {{ copyright }}.</h1>
    </section>
</template>
