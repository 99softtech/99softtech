import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export interface JobItems {
  _id: string;
  job_id: number;
  name: string;
  designation: string;
  description: string[];
  skills: string;
  framework: string;
  job_type: string;
  job_location: string;
}

export interface CareerDropdownItems {
  name: string;
  items: string[];
}

export interface BreadCrumbProps {
  pageName: string;
}

export interface JobFormDatas {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
}
export interface FormDatas {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
}

export interface HomeDropDown {
  about: boolean;
  projects: boolean;
  investors: boolean;
}

export interface HeaderDropdownItems {
  id: number;
  name: string;
  items: { label: string; link: string }[];
}

export interface HomeCardDataItems {
  id: number;
  img: string;
  label: string;
  desc: string;
  href: string;
}

export interface commentsItems {
  text: string;
  stars: number;
  author: string;
}

export interface projectDataItems {
  label: string;
  id: number;
  img: string;
  href: string;
  home: boolean;
  imgSm: string;
  imgLg: string;
  link: string;
  content: string[];
}

export interface contactCardDataItems {
  id: number;
  icon: IconType;
  label: string;
  designation: string;
  address: string;
}

export interface Report {
  label: string;
  file: string;
}

export interface Quarter {
  label: string;
  reports: Report[];
}

export interface AccordionItem {
  title: string;
  quarters: Quarter[];
}

export interface Tab {
  id: number;
  title: string;
  content: React.ReactNode;
  accordionItems?: AccordionItem[];
  hasAccordion: boolean;
}

export interface TabsProps {
  tabsData: Tab[];
}

export interface ClientFormDatas {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export interface ProjectPageProps {
  data: projectDataItems;
}

export interface Report {
  label: string;
  file: string;
}

export interface Quarter {
  label: string;
  reports: Report[];
}

export interface AccordionItem {
  title: string;
  quarters: Quarter[];
}

export interface AccordionProps {
  items: AccordionItem[];
  initialOpenIndex: number;
}

export interface ManagementDataItem {
  id: number;
  img: string;
  name: string;
  designation: string;
  data: string;
}

export interface ManagementCardProps {
  data: ManagementDataItem;
}

export interface JobData {
  _id: string;
  job_id: number;
  name: string;
  designation: string;
  description: Array<string>;
  framework: string;
  skills: string;
  job_type: string;
  job_location: string;
}

export interface JobCardProps {
  searchText: string;
  selectedFilters: {
      category: string;
      type: string;
      locations: string;
  };
}

export interface CareerDropdownProps {
  selectedFilters: {
    category: string;
    type: string;
    locations: string;
  };
  setSelectedFilters: Dispatch<SetStateAction<{
    category: string;
    type: string;
    locations: string;
  }>>
};
