<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

const english = mainStore.texts[mainStore.language].navbar.language_selector.en;
const dutch = mainStore.texts[mainStore.language].navbar.language_selector.nl;
const turkish = mainStore.texts[mainStore.language].navbar.language_selector.tr;

const selected_language = ref('');

const selectLanguage = (lang) => {
    selected_language.value = lang;
    mainStore.setLanguage(lang); // Assuming setLanguage updates the store
    // Save the selected language to localStorage or another persistent storage
    localStorage.setItem('selectedLanguage', lang);
};

const goToWebsite = () => {
    // Optionally perform any other actions before reloading
    location.reload(); // Reload the page to apply the settings
};
</script>
<template>
    <div class="bg-white/5 h-screen w-screen backdrop-blur-xl fixed">
        <div class="grid place-items-center h-full w-full">
            <div class="bg-white rounded-lg shadow-lg">
                <h1 class="text-center my-5 text-2xl font-semibold">preferences</h1>
                <h1 class="mx-5">change website settings to your liking</h1>
                <div class="bg-zinc-200 m-5 rounded-lg">
                    <p class="text-center text-lg pt-2">select language</p>
                    <div>
                        <ul class="p-5 pt-3 text-sm font-medium text-center rounded-lg sm:flex dark:divide-gray-700">
                            <li class="w-full focus-within:z-10">
                                <a @click="selectLanguage('en')" :class="{ 'bg-yellow-400 text-zinc-800': selected_language === 'en' }" class="cursor-pointer inline-block w-full p-4 rounded-lg bg-green-800 text-white ease-in-out duration-300">{{ english }}</a>
                            </li>
                            <li class="w-full focus-within:z-10 my-1 sm:my-0 sm:mx-5">
                                <a @click="selectLanguage('nl')" :class="{ 'bg-yellow-400 text-zinc-800': selected_language === 'nl' }" class="cursor-pointer inline-block w-full p-4 rounded-lg bg-green-800 text-white ease-in-out duration-300">{{ dutch }}</a>
                            </li>
                            <li class="w-full focus-within:z-10">
                                <a @click="selectLanguage('tr')" :class="{ 'bg-yellow-400 text-zinc-800': selected_language === 'tr' }" class="cursor-pointer inline-block w-full p-4 rounded-lg bg-green-800 text-white ease-in-out duration-300">{{ turkish }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bg-zinc-200 m-5 rounded-lg">
                    <p class="text-center text-lg pt-2">select theme</p>
                    <div>
                        <ul class="p-5 pt-3 text-sm font-medium text-center rounded-lg sm:flex dark:divide-gray-700">
                            <li class="w-full focus-within:z-10">
                                <a @click="selectDarkmode('true')" :class="{ 'bg-yellow-400 text-zinc-800': selected_theme === 'true' }" class="cursor-pointer inline-block w-full p-4 rounded-lg bg-green-800 text-white ease-in-out duration-300 group-">dark</a>
                            </li>
                            <li class="w-full focus-within:z-10 my-1 sm:my-0 sm:ml-5">
                                <a @click="selectLanguage('false')" :class="{ 'bg-yellow-400 text-zinc-800': selected_theme === 'false' }" class="cursor-pointer inline-block w-full p-4 rounded-lg bg-green-800 text-white ease-in-out duration-300">light</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button @click="goToWebsite" class="mx-auto my-5 px-5 py-2 bg-blue-500 text-white rounded-lg">Go to Website</button>
            </div>
        </div>
    </div>
</template>