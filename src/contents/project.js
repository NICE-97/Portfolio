import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Burgers from '../assets/Burgers.gif'
import Animal from '../assets/Animal-Hospital.gif'
import Blog from '../assets/Blog.gif'

export const data = [
    {
        date: "AUG 2024",
        title: "Website Blog",
        link: "https://nice-97-vite-tailwind-responsive.netlify.app/",
        materials:[
            {
                type: faGithub,
                link: "https://github.com/NICE-97/Website-Blog"
            },
        ],
        description:[
            "Clone Web Blog",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque at id explicabo quae laborum temporibus minima qui",
        ],
        skill:[
            ["React", "JavaScript", "Tailwild"],
        ],
        picture: Blog,
    },
    {
        date: "JUN 2024",
        title: "LandingPage Burgers",
        link: "",
        materials:[
            {
                type: faGithub,
                link: "https://github.com/NICE-97/LandingPage-Burger"
            },
        ],
        description:[
            "Convert web design into code",
            "HTML CSS Responsive",
        ],
        skill:[
            ["HTML", "CSS"],
        ],
        picture: Burgers,
    },
    {
        date: "MAY 2024",
        title: "LandingPage Animal Hospital",
        link: "",
        materials:[
            {
                type: faGithub,
                link: "https://github.com/NICE-97/LandingPage-Animal-Hospital"
            },
        ],
        description:[
            "Convert web design into code",
            "HTML CSS",
        ],
        skill:[
            ["HTML", "CSS"],
        ],
        picture: Animal,
    },
]