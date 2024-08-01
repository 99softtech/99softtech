import { Tab } from "../../helpers/types";

const monitoringAgencyReport: Tab[] = [
  {
    id: 1,
    hasAccordion: false,
    title: "Reports",
    content: "Content for Tab 1",
    accordionItems: [
      {
        title: "Annual Secretarial Compliance Report for F.Y 22-23",
        quarters: [
          {
            label: "",
            reports: [
              {
                label: "",
                file: "https://drive.google.com/file/d/1ie1Tr-eJN6w8afNFk14sBfliDghxBcQH/view",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default monitoringAgencyReport;
