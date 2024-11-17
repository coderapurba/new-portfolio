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
      text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <SiAdobeindesign size={33} />,
    },
  ],
};
