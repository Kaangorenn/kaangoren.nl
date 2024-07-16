import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            // site_settings: {
            //     selected_language: "en",
            //     darkmode: false,
            // },
            isHovered: false,
            isMenuHidden: true,
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
                            title: "about me",
                            description: "hi! i'm a 21-year-old software development graduate from mbo college zuidoost. with a passion for technology, i've honed my skills in coding and creating innovative software solutions. when i'm not immersed in the world of development, you can find me indulging in my hobbies: listening to and making music, engaging in thrilling airsoft battles, and exploring the open road on my motorcycle. my diverse interests fuel my creativity and drive, both in my professional and personal life.",
                            description_2: "read further if you want to know which stack i use. i’ll provide a detailed overview of the technologies and tools that form the backbone of my development environment.",
                            read_more_button: "read more",
                        },
                        technologies: {
                            title: "stack",
                            description: "i am a versatile developer who leverages a variety of technologies to bring ideas to life. with proficiency in html, css, and javascript, i create dynamic and engaging web experiences. my expertise extends to modern frameworks like vue.js and nuxt.js, enhanced with pinia for state management, allowing me to build robust and efficient applications.",
                            description_2: "on the backend, i utilize php, along with the laravel framework, to develop scalable and secure server-side solutions. my database skills include mysql and sqlite, ensuring data integrity and performance. i also use git for version control, figma for design, and tailwind and bootstrap for responsive, sleek ui design.",                        
                        },
                    },
                    portfolio: {
                            title: "portfolio",
                        description: "this website is one of my projects. i have all my projects available on github, where you can explore my work in detail. you will find a diverse range of projects, each showcasing my skills and interests in various aspects of web development and programming. eventually, ",
                            description_2: "i will also be adding some of these projects to my website for easier access and a more curated presentation. this way, you can not only view my code but also see the projects in action. stay tuned for more updates and feel free to explore my github in the meantime.",
                            github_button: "view on github",
                    },
                    contact: {
                        title: "contact",
                        description: "if you have any questions or would like to get in touch, feel free to send me a message. i'm always open to new opportunities and collaborations, so don't hesitate to reach out!",
                        email: "send me an email",
                        linkedin: "connect on linkedin",
                        github: "view my github",
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
        },
        toggleMenu() {
            this.isMenuHidden = !this.isMenuHidden;
        },
    },
    getters: {
    },
    persist: {

    },
})
