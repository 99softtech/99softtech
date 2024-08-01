import missionImg from "../../utils/images/Mission-Vision.svg";
import visionImg from "../../utils/images/Milestones.svg";
import { HomeCardDataItems } from "../../helpers/types";

export const homeCardData: HomeCardDataItems[] = [
    {
      id: 1,
      img: missionImg,
      label: "Mission & Vision",
      desc: "B2B To provide a comprehensive FinTech solution for new & existing businesses, assisting them to thrive in the evolving world of e-commerce & its competition.",
      href: "/mission-vision",
    },
    {
      id: 2,
      img: visionImg,
      label: "Milestones",
      desc: "In today's Digital times, FinTech is Dynamic. All platforms are constantly changing, and so are their milestones.",
      href: "/milestones",
    },
];