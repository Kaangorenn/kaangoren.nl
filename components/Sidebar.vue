<script setup>
import { useMainStore } from '~/stores/mainStore';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const mainStore = useMainStore();
const router = useRouter();

const english = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.en);
const dutch = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.nl);
const turkish = computed(() => mainStore.texts[mainStore.language].navbar.language_selector.tr);

const home_navbar = computed(() => mainStore.texts[mainStore.language].navbar.home);
const about_navbar = computed(() => mainStore.texts[mainStore.language].navbar.about);
const stack_navbar = computed(() => mainStore.texts[mainStore.language].navbar.stack);
const portfolio_navbar = computed(() => mainStore.texts[mainStore.language].navbar.portfolio);
const contact_navbar = computed(() => mainStore.texts[mainStore.language].navbar.contact);

const language_selector_text = computed(() => mainStore.texts[mainStore.language].navbar.language_selector_text);
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
    if (window.innerWidth > 1024) {
        mainStore.isMenuHidden = false;
    } else {
        mainStore.isMenuHidden = true;
    }
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
    <div class="h-20 w-screen fixed z-50 left-0 mix-blend-difference">
        <div class="grid place-items-center h-full w-full">
            <div class="h-full w-full grid place-items-center relative col-span-3">
                <div @click="toggleMenu" class="z-10 text-sm absolute left-2 top-2 p-[10px] transition-colors duration-300 cursor-pointer">
                    <button :class="['menuButton h-10 w-10', !isMenuHidden ? 'open' : '']" title="Open Menu">
                        <hr class="mx-2 mb-2 border-[1px] border-white" />
                        <hr class="mx-2 border-[1px] border-white" />
                    </button>
                    <span v-if="!mainStore.isMenuHidden" class="text-white absolute mt-[10px] ml-[10px]">close</span>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="bg-red-200 grid grid-cols-5 lg:grid-rows-5 fixed right-0 h-screen w-screen lg:w-20 text-white mix-blend-difference z-40 "></div> -->
    <div v-if="!mainStore.isMenuHidden" class="grid bg-black lg:bg-black fixed right-0 h-full w-screen lg:w-20 text-white z-40 lg:mix-blend-difference backdrop-blur-lg lg:backdrop-blur-none transition-all">
        <div class="grid grid-rows-7 lg:grid-rows-5 w-full h-full absolute pt-20 lg:pt-0">

            <div class="w-full h-full grid place-items-center">
                <NuxtLink @click="closeMenu" to="#home" :class="{ 'underline': page === 'home' }" class="rotate-0 lg:-rotate-90">{{ home_navbar }}</NuxtLink>
            </div>
            <div class="w-full h-full grid place-items-center">
                <NuxtLink @click="closeMenu" to="#about" :class="{ 'underline': page === 'about' }" class="rotate-0 lg:-rotate-90">{{ about_navbar }}</NuxtLink>
            </div>
            <div class="w-full h-full grid place-items-center">
                <NuxtLink @click="closeMenu" to="#stack" :class="{ 'underline': page === 'stack' }" class="rotate-0 lg:-rotate-90">{{ stack_navbar }}</NuxtLink>
            </div>
            <div class="w-full h-full grid place-items-center">
                <NuxtLink @click="closeMenu" to="#portfolio" :class="{ 'underline': page === 'portfolio' }" class="rotate-0 lg:-rotate-90">{{ portfolio_navbar }}</NuxtLink>
            </div>
            <div class="w-full h-full grid place-items-center">
                <NuxtLink @click="closeMenu" to="#contact" :class="{ 'underline': page === 'contact' }" class="rotate-0 lg:-rotate-90">{{ contact_navbar }}</NuxtLink>
            </div>
            <div class="lg:hidden">
                <div class="w-full h-full grid place-items-center">
                    <div class="inline-flex gap-2">
                        <NuxtLink class="rotate-0 lg:-rotate-90 cursor-pointer">{{ language_selector_text }}:</NuxtLink>
                        <div>
                            <NuxtLink @click="setLanguage('en')" :class="{ 'underline': selected_language === 'en' }" class="rotate-0 lg:-rotate-90 cursor-pointer">{{ english }}</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink @click="setLanguage('nl')" :class="{ 'underline': selected_language === 'nl' }" class="rotate-0 lg:-rotate-90 cursor-pointer">{{ dutch }}</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink @click="setLanguage('tr')" :class="{ 'underline': selected_language === 'tr' }" class="rotate-0 lg:-rotate-90 cursor-pointer">{{ turkish }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:hidden">
                <div class="w-full h-full grid place-items-center">
                    <NuxtLink @click.prevent="scrollToTop" class="rotate-0 lg:-rotate-90 cursor-pointer">{{ scroll_button }}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.menuButton hr {
    transition: transform 300ms ease-in-out;
}

.open hr:nth-of-type(1) {
    transform: translateY(5px) translateX(0px) rotate(45deg);
}

.open hr:nth-of-type(2) {
    transform: translatey(-5px) translateX(0px) rotate(-45deg);
}
</style>