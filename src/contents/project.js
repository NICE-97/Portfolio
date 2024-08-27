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
            "Practice cloning a blog website and learn how to use React hooks, including a responsive navbar function.",
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
            "Practice creating a website landing page for a burger project using a Freepik template with Photoshop (PS) and Visual Studio Code (VS Code) in HTML, CSS, and responsive design.",
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
            "Practice building a website landing page using a Freepik template with HTML and CSS.",
        ],
        skill:[
            ["HTML", "CSS"],
        ],
        picture: Animal,
    },
]