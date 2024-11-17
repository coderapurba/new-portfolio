import { GoDeviceDesktop } from "react-icons/go";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
  title: "About Me",
  name: "Apurba Samadder",
  description:
    "With nearly 4+ years of experience, As a Frontend Software Engineer I have full stack experience with a frontend focus. I'm currently working on Cohete eCommerace institute. Worked as a professional Frontend developer. Learning Full-stack Web/App development.",
  exports: [
    "React Native",
    "Next.js",
    "React",
    "JavaScript",
    "Shopify",
    "UI/UX",
  ],
  image: "/Asset/me.png",
  services: [
    {
      title: "Mobile Apps",
      text: "I am a skilled React Native mobile app developer with a passion for creating high-performance cross-platform applications.",
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: "Web Development",
      text: "As a web developer with a strong foundation in building dynamic, user-friendly, and responsive websites and web applications.",
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: "UI/UX Design",
      text: "My expertise spans front-end development, UI/UX design, and scalable web architectures, ensuring that every project.",
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: "Web Design",
      text: "My focus is on delivering designs that not only look great but also provide seamless functionality and an exceptional user experience.",
      icon: <SiAdobeindesign size={33} />,
    },
  ],
};
