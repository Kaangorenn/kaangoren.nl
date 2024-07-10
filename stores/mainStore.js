import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            isHovered: false,
            darkmode: null,
            isLoading: false,
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
    },
    getters: {
    },
    persist: {

    },
})
