import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { RiBootstrapFill, RiJavascriptFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiGithub,
  SiNextdotjs,
  SiCreatereactapp,
  SiRedux,
  SiVite,
} from "react-icons/si";
import { MdCss } from "react-icons/md";

export const cardContent = [
  {
    id: 0,
    title: "HOMYO",
    description:
      "Find your ideal professional and customer through geolocation",
    imageUrl: "/Homyo-logo.jpg",
    skills: [
      {
        icon: <RiJavascriptFill size="40" />,
      },
      {
        icon: <FaPython size="40" />,
      },
      {
        icon: <RiBootstrapFill size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
      {
        icon: <SiCreatereactapp size="40" />,
      },
    ],
    url: "https://sample-service-name-pqox.onrender.com/",
  },
  {
    id: 1,
    title: "Reezume app generator",
    description:
      "User-friendly platform for generating professional resumes in easy, straightforward steps",
    imageUrl: "/logo_reezume.jpg",
    skills: [
      {
        icon: <SiNextdotjs size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
      {
        icon: <SiGithub size="40" />,
      },
    ],
    url: "https://reezume.vercel.app/",
  },
  {
    id: 2,
    title: "AlexDex API consumption",
    description: "Your favourite 1st-gen PokeDex with all stats",
    imageUrl: "/AlexDex.png",
    skills: [
      {
        icon: <BiLogoTypescript size="40" />,
      },
      {
        icon: <SiRedux size="40" />,
      },
      {
        icon: <SiCreatereactapp size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
    ],
    url: "https://alexdex.vercel.app/",
  },
  {
    id: 3,
    title: "iOS calculator",
    description:
      "A clone of the iOS calculator - identical functionalities and behaviors. Just for fun.",
    imageUrl: "/ios_calculator.png",
    skills: [
      {
        icon: <BiLogoTypescript size="40" />,
      },
      {
        icon: <SiVite size="40" />,
      },
      {
        icon: <MdCss size="40" />,
      },
    ],
    url: "https://calculator-vite-nu.vercel.app/",
  },
  {
    id: 4,
    title: "To do list with React",
    description:
      "Just a chill to-do list. Casual code for keeping things in check. 😎",
    imageUrl: "/ToDo.png",
    skills: [
      {
        icon: <SiNextdotjs size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
      {
        icon: <SiGithub size="40" />,
      },
    ],
    url: "https://todo-list-pi-kohl.vercel.app/",
  },
];
