import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            site_settings: {
                selected_language: "en",
                darkmode: false,
            },
            isHovered: false,
            darkMode: false,
            isLoading: false,
            language: "en",
            texts: {
                en: {
                    site_settings: {
                        darkmode: "darkmode",
                        lightmode: "lightmode",
                    },
                    navbar: {
                        home: "home",
                        about: "about",
                        portfolio: "portfolio",
                        contact: "contact",
                        language_selector: {
                            en: "english",
                            nl: "dutch",
                            tr: "turkish",
                        },
                    },
                    home: {
                        darkmode_button: "toggle darkmode",
                        job_title: "software developer",
                    },
                    about: {
                        about: {
                            title: "About me",
                            description: "hi! i'm a 21-year-old software development graduate from mbo college zuidoost. with a passion for technology, i've honed my skills in coding and creating innovative software solutions. when i'm not immersed in the world of development, you can find me indulging in my hobbies: listening to and making music, engaging in thrilling airsoft battles, and exploring the open road on my motorcycle. my diverse interests fuel my creativity and drive, both in my professional and personal life. welcome to my corner of the web!",
                        },
                        technologies: {
                            title: "technologies i use",
                            description: "i have experience with a variety of programming languages, frameworks, and tools. here are some of the technologies i'm proficient in",
                            list: [
                                "html",
                                "css",
                                "javascript",
                                "vue.js",
                                "nuxt.js",
                                "node.js",
                                "php",
                                "laravel",
                                "mysql",
                                "sqlite",
                                "git",
                                "Figma",
                            ],
                        
                        },
                    },
                    footer: {
                        links: {

                        },
                        socials: {
                            linkedin: "",
                            twitter: "",
                            github: "",
                        },
                        copyright: "all rights reserved",
                    },
                },
                nl: {
                    navbar: {
                        home: "home",
                        about: "over mij",
                        portfolio: "portfolio",
                        contact: "contact",
                        language_selector: {
                            en: "engels",
                            nl: "nederlands",
                            tr: "turks",
                        },
                    },
                    home: {
                        darkmode_button: "donkere modus schakelen",
                        job_title: "software ontwikkelaar",
                    },
                    about: {
                        title: "Over mij",
                        description: "Ik ben een software ontwikkelaar met een passie voor het maken van mooie en functionele applicaties.",
                    },
                    footer: {
                        links: {

                        },
                        socials: {
                            linkedin: "",
                            twitter: "",
                            github: "",
                        },
                        copyright: "alle rechten voorbehouden",
                    },
                },
                tr: {
                    navbar: {
                        home: "home",
                        about: "benim hakkımda",
                        portfolio: "portföy",
                        contact: "iletişim",
                        language_selector: {
                            en: "ingilizce",
                            nl: "hollandaca",
                            tr: "türkçe",
                        },
                    },
                    home: {
                        darkmode_button: "karanlık modu değiştir",
                        job_title: "yazılım mühendisi",
                    },
                    about: {
                        title: "Benim hakkımda",
                    },
                    footer: {
                        links: {

                        },
                        socials: {
                            linkedin: "",
                            twitter: "",
                            github: "",
                        },
                    },
                    copyright: "tüm hakları saklıdır",
                },
            }
        }
    },
    actions: {
        toggleHover(value) {
            this.isHovered = value;
        },
        applyDarkMode() {
        if (this.darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        },
        setLanguage(lang) {
            this.language = lang;
        }
    },
    getters: {
    },
    persist: {

    },
})
