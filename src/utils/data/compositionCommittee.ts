import { Tab } from "../../helpers/types";

const compositionCommitteeData: Tab[] = [
  {
    id: 2,
    hasAccordion: false,
    title: "Reports",
    content: "Content for Tab 2",
    accordionItems: [
      {
        title: "List Committee",
        quarters: [
          {
            label: "Quarter 1",
            reports: [
              {
                label: "Report 1",
                file: "https://drive.google.com/file/d/1e3XoPSZRFbXSpO5nCCJMCjNGm4yVqJQE/view",
              },
            ],
          },
        ],
      },
      // Additional items...
    ],
  },
];

export default compositionCommitteeData;
