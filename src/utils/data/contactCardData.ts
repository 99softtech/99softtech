import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { contactCardDataItems } from "../../helpers/types";

export const contactCardData: contactCardDataItems[] = [
    {
        id: 1,
        icon: IoMdMail,
        label: "StakeHolders",
        designation: "Company Secretary",
        address: "Unit 202, Shri Ramakrishna Chambers, Plot No. 67B, TPS - IV, Linking Road,Khar (W), Mumbai, Maharashtra, 400052 022 - 022-26000457/8 cs@gllfl.com.test www.gllfl.com.test"
    },
    {
        id: 2,
        icon: FaPhoneAlt,
        label: "Investors",
        designation: "RST",
        address: "Satellite Corporate Services Pvt. Ltd. B-302, Sony Apartment, Opp. St. Judge's High School, Off. Andheri - Kurla Road, Jarimari, Sakinaka, Mumbai, Maharashtra, 400072 022-28220461/ 022-28511809 service@satellitecorporate.com www.satellitecorporate.com"
    },
    {
        id: 3,
        icon: FaLocationDot,
        label: "Business Queries",
        designation: "Manager",
        address: "Unit 202, Shri Ramakrishna Chambers, Plot No. 67B, TPS - IV, Linking Road,Khar (W), Mumbai, Maharashtra, 400052 022 - 022-26000457/8 contact@gllfl.com.test www.gllfl.com.test"
    },
]