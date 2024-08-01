import { HeaderDropdownItems } from "../../helpers/types";

export const headerDropdownData: HeaderDropdownItems[] = [
  {
    id: 1,
    name: "about",
    items: [
      { label: "Our Story", link: "/about-us" },
      { label: "Board of Directors", link: "/board-of-directors" },
      { label: "Vision and Mission", link: "/mission-vision" },
      { label: "Milestones", link: "/milestones" },
    ],
  },
  {
    id: 2,
    name: "projects",
    items: [
      { label: "Asha Purti Loans", link: "/ashapurti-loans/" },
      { label: "Bade Bhai Sab", link: "/bade-bhaisab/" },
      { label: "Saral Sahayak", link: "/saral-sahayak/" },
      { label: "India FDI", link: "/india-fdi/" },
      { label: "Xoom Pay", link: "/xoom-pay/" },
      { label: "Farmed in India", link: "/farmedinindia/" },
    ],
  },
  {
    id: 3,
    name: "investors Corner",
    items: [
      { label: "Anouncements", link: "/anouncements" },
      { label: "Financial Results", link: "/financial-results" },
      { label: "Composition of Committee", link: "/composition-of-committee" },
      { label: "Shareholding Pattern", link: "/shareholding-pattern" },
      {
        label: "Corporate Governance Report",
        link: "/corporate-governance-report",
      },
      {
        label: "Code of Conduct & Policies",
        link: "/code-of-conduct-policies",
      },
      { label: "Materiality of Events", link: "/materiality-of-events" },
      { label: "Annual Return", link: "/annual-return" },
      {
        label: "Annual Secretarial Compliance Report",
        link: "/annual-secretarial-compliance-report",
      },
      { label: "Monitoring Agency Report", link: "/" },
      { label: "Scheme of Arrangement", link: "/" },
      { label: "Unclaimed Dividend", link: "/" },
      { label: "Advice to Shareholders", link: "/" },
    ],
  },
];
