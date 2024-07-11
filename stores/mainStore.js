import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            isHovered: false,
            darkmode: null,
            isLoading: false,

            language: 'en', // Default language
            texts: {
                en: {
                    navbar: {
                        home: "home",
                        about: "about",
                        portfolio: "portfolio",
                        contact: "contact",
                    },
                    home: {
                        darkmode_button: "toggle darkmode",
                        job_title: "software developer",
                    },
                },
                nl: {
                    navbar: {
                        home: "home",
                        about: "over mij",
                        portfolio: "portfolio",
                        contact: "contact",
                    },
                    home: {
                        darkmode_button: "donkere modus schakelen",
                        job_title: "software ontwikkelaar",
                    },
                },
                tr: {
                    greeting: "Merhaba",
                    },
                },
            }
        },
    actions: {
        toggleHover(value) {
            this.isHovered = value;
        },
        toggleTheme() {
            this.darkmode = !this.darkmode; // Toggle the dark mode state
            if (this.darkmode) {
                document.documentElement.classList.add('dark'); // Enable Tailwind dark mode
            } else {
                document.documentElement.classList.remove('dark'); // Disable Tailwind dark mode
            }
        },
        changeLanguage(lang) {
            this.language = lang;
        },

        setLanguage() {
            // Set the language of the website
            document.documentElement.lang = this.language;
        },
    },
    getters: {
    },
    persist: {

    },
})
