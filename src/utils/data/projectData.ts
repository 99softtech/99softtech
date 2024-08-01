import AshapurtiImg from "../../utils/images/Ashapurti_BG.png";
import SahayakImg from "../../utils/images/Sahayak_BG.png";
import BBGImg from "../../utils/images/BBS_BG.png";
import IOPImg from "../../utils/images/IOP_BG1.png";
import AshapurtiImgSm from "../../utils/images/lons-300x100.png";
import AshapurtiImgLg from "../../utils/images/Ashapurti_Banner_BG.jpg";
import BBGImgSm from "../../utils/images/MicrosoftTeams-image-300x99.png";
import BBGImgLg from "../../utils/images/BBS_Banner_BG-1.jpg";
import SahayakImgSm from "../../utils/images/Sahayak_Logo-300x95.jpg";
import SahayakImgLg from "../../utils/images/Saralsayak_Banner.jpg";
import IndiaImgSm from "../../utils/images/Indian-FDI_logo-300x122.png";
import IndiaImgLg from "../../utils/images/IFDI_Home-Page.jpg";
import XoomImgSm from "../../utils/images/xoompay_logo1-300x59.png";
import XoomImgLg from "../../utils/images/Web-Screen.png";
import FarmedImgSm from "../../utils/images/farmedinindia_logo-300x115.png"
import FarmedImgLg from "../../utils/images/farmindia-Banner.png";

import { projectDataItems } from "../../helpers/types";

export const projectData: projectDataItems[] = [
    {
      id: 1,
      home: true,
      img: AshapurtiImg,
      label: "Asha Purti Loans",
      href: "/asha-purti-loans",
      imgSm: AshapurtiImgSm,
      imgLg: AshapurtiImgLg,
      link: "https://ashapurtiloans.com/",
      content: [
        "As an NBFC (Non-Banking Financial Company), the Reserve Bank of India has licensed us to provide loans and finances in the interest of all categories. To serve this purpose, we have developed a digital lending platform, www.ashapurti.com.",
        "It will be connected to our Loan Processing Software and Loan management software. This platform will manage and disburse digital loans ranging from secured loans like Gold and Property to unsecured loans like personal loans to doctors with easy access anytime. Such loans help you get financial aid in an instant without much trouble. This is also one of the reasons why the gold loan market has remained  popular among the masses for many years.  A gold or property loan is a secured loan, which implies that it is protected by collateral (gold or property). This collateral remains with the creditor or lender till the loan amount is completely paid off. In case of a borrower defaults, the creditor uses the collateral to regain some or all amount initially owned by the borrower.",
        "The digitalization of this platform made it easy for customers to provide easy documentation, have instant approval, and have payments disbursed online. This platform also provides hassle-free, paperless transactions from the push of a button on the user's smartphones or browsers, with no hidden charges and 100% safety and security of the collateral, either Gold or Property. The applicant can avail of a loan for up to 1.5 Cr. and pay interest only for the exact number of days till the loan is paid off. This and many other features make this platform unique, safe and user friendly for the users."
      ],
    },
    {
      id: 2,
      home: true,
      img: SahayakImg,
      label: "Saral Sahayak",
      href: "/saral-sahayak",
      imgSm: SahayakImgSm,
      imgLg: SahayakImgLg,
      link: "",
      content: [],
    },
    {
      id: 3,
      home: true,
      img: BBGImg,
      label: "Bade Bhai Sab",
      href: "/bade-bhai-sab",
      imgSm: BBGImgSm,
      imgLg: BBGImgLg,
      link: "",
      content: [
        "BadeBhaiSaab.com is a Debt Restructuring and Lifestyle Altering Platform. It provides a unique debt-free solution for the Indian middle and working class. The platform offers a dynamic credit line that helps manage regular and unexpected expenses and bills without ever failing to make a payment on time.",
      ],
    },
    {
      id: 4,
      home: true,
      img: IOPImg,
      label: "India Online Pay",
      href: "/india-online-pay",
      imgSm: '',
      imgLg: '',
      link: "",
      content: [],
    },
    {
      id: 5,
      home: false,
      img: '',
      label: "India FDI",
      href: "",
      imgSm: IndiaImgSm,
      imgLg: IndiaImgLg,
      link: "",
      content: [],
    },
    {
      id: 6,
      home: false,
      img: '',
      label: "Xoom Pay",
      href: "",
      imgSm: XoomImgSm,
      imgLg: XoomImgLg,
      link: "",
      content: [
        "Domestic Money Transfer Applications operating on the mini-ATMs and phones",
        "The demography of Indian villages where large numbers of these transfers are sent even via bank transfers does not have easy accessibility of ATMs for the recipients to withdraw money sent via bank transfers. Various factors like the distance of travel to the nearest available ATM, ATMs without funds, and ignorance of ATM management create much troublesome experience for the receiver. Our solution will solve a large part of this problem and provide employment.",
      ],
    },
    {
      id: 7,
      home: false,
      img: '',
      label: "Farmed in India",
      href: "",
      imgSm: FarmedImgSm,
      imgLg: FarmedImgLg,
      link: "",
      content: [],
    },
  ];