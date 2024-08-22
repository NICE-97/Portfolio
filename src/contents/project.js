import { faGithub } from "@fortawesome/free-brands-svg-icons";
import pictureCloneWeb from '../assets/vidio (online-video-cutter.com) 00_00_00-00_00_30.gif'
import pictureBurger from '../assets/vidio1 (online-video-cutter.com) 00_00_00-00_00_30.gif'

export const data = [
    {
        date: "AUG 2024",
        title: "Clone Web Site",
        link: "https://nice-97-vite-tailwind-responsive.netlify.app/",
        materials:[
            {
                type: faGithub,
                link: "https://github.com/NICE-97/Vite-Tailwind-Responsive"
            },
        ],
        description:[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at id explicabo quae laborum temporibus minima qui quod assumenda in?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at id explicabo quae laborum temporibus minima qui",
        ],
        skill:[
            ["React", "JavaScript", "Tailwild"],
        ],
        picture: pictureCloneWeb,
    },
    {
        date: "JUN 2024",
        title: "Clone Web Site1",
        link: "",
        materials:[
            {
                type: faGithub,
                link: "https://github.com/NICE-97/HTML-CSS-Responsive/tree/main"
            },
        ],
        description:[
            "Lorem ipsum dolor sit amet, explicabo quae laborum temporibus minima qui quod assumenda in?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at id explicabo quae laborum",
        ],
        skill:[
            ["HTML", "CSS"],
        ],
        picture: pictureBurger,
    },
]