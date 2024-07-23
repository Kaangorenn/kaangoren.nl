import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            // site_settings: {
            //     selected_language: "en",
            //     darkmode: false,
            // },
            page: '',
            isHovered: false,
            isMenuHidden: true,
            darkMode: false,
            isLoading: false,
            language: "en",
            texts: {
                en: {
                    // site_settings: {
                    //     darkmode: "darkmode",
                    //     lightmode: "lightmode",
                    // },
                    navbar: {
                        home: "home",
                        about: "about",
                        stack: "stack",
                        portfolio: "portfolio",
                        contact: "contact",
                        language_selector_text: "language selector",
                        language_selector: {
                            en: "english",
                            nl: "dutch",
                            tr: "turkish",
                        },
                        darkmode_button: "toggle darkmode",
                        ligtmode_button: "toggle lightmode",
                        scroll_button: "sayfanın başına git",
                        scroll_button: "scroll to top",
                    },
                    home: {
                        job_title: "software developer",
                    },
                    about: {
                        about: {
                            title: "about me",
                            description: "hi! i'm a 21-year-old software development graduate from mbo college zuidoost. with a passion for technology, i've honed my skills in coding and creating innovative software solutions. when i'm not immersed in the world of development, you can find me indulging in my hobbies: listening to and making music, engaging in thrilling airsoft battles, and exploring the open road on my motorcycle. my diverse interests fuel my creativity and drive, both in my professional and personal life.",
                            description_2: "read further if you want to know which stack i use. i’ll provide a detailed overview of the technologies and tools that form the backbone of my development environment.",
                            read_more_button: "read further",
                        },
                    },
                    technologies: {
                            title: "stack",
                            description: "i am a versatile developer who leverages a variety of technologies to bring ideas to life. with proficiency in html, css, and javascript, i create dynamic and engaging web experiences. my expertise extends to modern frameworks like vue.js and nuxt.js, enhanced with pinia for state management, allowing me to build robust and efficient applications.",
                            description_2: "on the backend, i utilize php, along with the laravel framework, to develop scalable and secure server-side solutions. my database skills include mysql and sqlite, ensuring data integrity and performance. i also use git for version control, figma for design, and tailwind and bootstrap for responsive, sleek ui design.",                        
                            check_out_stack_button: "check out my stack on github",
                        },
                    portfolio: {
                            title: "portfolio",
                        description: "this website is one of my projects. i have all my projects available on github, where you can explore my work in detail. you will find a diverse range of projects, each showcasing my skills and interests in various aspects of web development and programming. eventually.",
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
                    // site_settings: {
                    //     darkmode: "darkmode",
                    //     lightmode: "lightmode",
                    // },
                    navbar: {
                        home: "home",
                        about: "over mij",
                        stack: "stack",
                        portfolio: "portfolio",
                        contact: "contact",
                        language_selector_text: "taalkeuze",
                        language_selector: {
                            en: "engels",
                            nl: "nederlands",
                            tr: "turks",
                        },
                        darkmode_button: "donkere modus schakelen",
                        ligtmode_button: "lichtmodus schakelen",
                        scroll_button: "sayfanın başına git",
                        scroll_button: "scroll naar boven",
                    },
                    home: {
                        job_title: "software ontwikkelaar",
                    },
                    about: {
                        about: {
                            title: "over mij",
                            description: "hoi! ik ben een 21-jarige afgestudeerde softwareontwikkeling van het mbo college zuidoost. met een passie voor technologie heb ik mijn vaardigheden in coderen en het creëren van innovatieve softwareoplossingen aangescherpt. als ik niet verdiept ben in de wereld van ontwikkeling, kun je me vinden terwijl ik geniet van mijn hobby's: luisteren naar en maken van muziek, deelnemen aan spannende airsoft-gevechten en het verkennen van de open weg op mijn motor. mijn diverse interesses voeden mijn creativiteit en gedrevenheid, zowel in mijn professionele als persoonlijke leven.",
                            description_2: "lees verder als je wilt weten welke stack ik gebruik. ik zal een gedetailleerd overzicht geven van de technologieën en tools die de ruggengraat van mijn ontwikkelomgeving vormen.",
                            read_more_button: "lees verder",
                        },
                    },
                    technologies: {
                            title: "stack",
                            description: "ik ben een veelzijdige ontwikkelaar die een verscheidenheid aan technologieën gebruikt om ideeën tot leven te brengen. met vaardigheid in html, css en javascript creëer ik dynamische en boeiende webervaringen. mijn expertise strekt zich uit tot moderne frameworks zoals vue.js en nuxt.js, versterkt met pinia voor state management, waardoor ik robuuste en efficiënte applicaties kan bouwen.",
                            description_2: "aan de backend gebruik ik php, samen met het laravel-framework, om schaalbare en veilige server-side oplossingen te ontwikkelen. mijn databasevaardigheden omvatten mysql en sqlite, waarbij ik zorg voor dataintegriteit en prestaties. ik gebruik ook git voor versiebeheer, figma voor ontwerp, en tailwind en bootstrap voor responsieve, gestroomlijnde ui-ontwerpen..",                        
                            check_out_stack_button: "bekijk mijn stack op github",
                        },
                    portfolio: {
                            title: "portfolio",
                        description: "deze website is een van mijn projecten. ik heb al mijn projecten beschikbaar op github, waar je mijn werk in detail kunt verkennen. je zult een diverse reeks projecten vinden, die elk mijn vaardigheden en interesses in verschillende aspecten van webontwikkeling en programmeren laten zien. uiteindelijk.",
                            description_2: "ik zal ook enkele van deze projecten aan mijn website toevoegen voor gemakkelijker toegang en een meer verzorgde presentatie. op deze manier kun je niet alleen mijn code bekijken, maar ook de projecten in actie zien. blijf op de hoogte voor meer updates en voel je vrij om intussen mijn github te verkennen",
                            github_button: "bekijk op github",
                    },
                    contact: {
                        title: "contact",
                        description: "als je vragen hebt of contact wilt opnemen, stuur me gerust een bericht. ik sta altijd open voor nieuwe kansen en samenwerkingen, dus aarzel niet om contact op te nemen!",
                        email: "stuur me een e-mail",
                        linkedin: "neem contact op met linkedin",
                        github: "bekijk mijn github",
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
                    // site_settings: {
                    //     darkmode: "darkmode",
                    //     lightmode: "lightmode",
                    // },
                    navbar: {
                        home: "home",
                        about: "hakkımda",
                        stack: "stack",
                        portfolio: "portföy",
                        contact: "iletişim",
                        language_selector_text: "dil seçici",
                        language_selector: {
                            en: "ingilizce",
                            nl: "hollandaca",
                            tr: "türkçe",
                        },
                        darkmode_button: "karanlık modu aç",
                        ligtmode_button: "karanlık modu kapat",
                        scroll_button: "sayfanın başına git",
                    },
                    home: {
                        job_title: "yazılım geliştirici",
                    },
                    about: {
                        about: {
                            title: "hakkımda",
                            description: "merhaba! ben 21 yaşında bir yazılım geliştirme mezunuyum, mbo college zuidoost'tan. teknolojiye olan tutkumla kodlama ve yenilikçi yazılım çözümleri oluşturma konusundaki yeteneklerimi geliştirdim. geliştirme dünyasına gömülmemişken, hobilerimden keyif alırken beni bulabilirsiniz: müzik dinlemek ve yapmak, heyecanlı airsoft savaşlarına katılmak ve motorumla açık yolda keşfe çıkmak. çeşitli ilgi alanlarım yaratıcılığımı ve motivasyonumu besliyor, hem profesyonel hem de kişisel hayatımda.",
                            description_2: "eğer hangi teknolojileri ve araçları kullandığımı öğrenmek istersen, stack kısmını oku. burada, geliştirme ortamımın temelini oluşturan detaylı bir özet bulacaksın.",
                            read_more_button: "devamını oku",
                        },
                    },
                    technologies: {
                            title: "stack",
                            description: "ben çok yönlü bir geliştiriciyim ve fikirleri hayata geçirmek için çeşitli teknolojiler kullanıyorum. html, css ve javascript konusundaki yetkinliğimle dinamik ve etkileyici web deneyimleri oluşturuyorum. uzmanlığım modern framework'leri, vue.js ve nuxt.js gibi, pinia ile state management ile güçlendirilmiş şekilde kapsamaktadır, bu da bana sağlam ve verimli uygulamalar geliştirme imkanı tanıyor.",
                            description_2: "backend'de php kullanıyorum, laravel framework'ü ile birlikte, ölçeklenebilir ve güvenli sunucu tarafı çözümleri geliştirmek için. veritabanı becerilerim mysql ve sqlite'ı kapsar, bu da veri bütünlüğünü ve performansı sağlar. ayrıca sürüm kontrolü için git, tasarım için figma ve yanıt veren, şık ui tasarımı için tailwind ve bootstrap kullanıyorum.",                        
                            check_out_stack_button: "github'da stack'imi incele",
                        },
                    portfolio: {
                            title: "portföy",
                        description: "bu web sitesi projelerimden biridir. projelerimin hepsini github'da bulabilirsin, burada işimi detaylı bir şekilde keşfedebilirsin. çeşitli projeler bulacaksın, her biri web geliştirme ve programlamanın çeşitli yönlerinde becerilerimi ve ilgi alanlarımı sergiliyor. nihayetinde.",
                            description_2: "bu projelerden bazılarını web siteme ekleyeceğim, böylece erişim daha kolay ve sunum daha düzenli olacak. bu sayede sadece kodumu görmekle kalmaz, aynı zamanda projeleri aksiyonda görebilirsin. daha fazla güncelleme için bizi takipte kal ve bu arada github'ımı keşfetmekten çekinme.",
                            github_button: "github'da görüntüle",
                    },
                    contact: {
                        title: "iletişim",
                        description: "herhangi bir sorunuz varsa veya iletişime geçmek isterseniz, bana mesaj göndermekten çekinmeyin. her zaman yeni fırsatlara ve iş birliklerine açığım, bu yüzden çekinmeden ulaşabilirsiniz!",
                        email: "bana e-posta gönder",
                        linkedin: "linkedin'de bağlantı kur",
                        github: "github'ımı görüntüle",
                    },
                    footer: {
                        links: {

                        },
                        socials: {
                            linkedin: "",
                            twitter: "",
                            github: "",
                        },
                        copyright: "tüm hakları saklıdır",
                    },
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
        setPage(page) {
            this.page = page;
        }
    },
    getters: {
    },
    persist: {

    },
})
