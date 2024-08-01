import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import companyLogo from "../utils/images/MicrosoftTeams-image-138.png";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 py-6">
          <div className="w-full lg:w-1/3">
            <img src={companyLogo} alt="Company Logo" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.000029286932!2d72.834437!3d19.074726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91202520dbb%3A0x762b4c2b09e8c99d!2sGOLDEN%20LEGAND%20LEASING%20AND%20FINANCE%20LTD!5e0!3m2!1sen!2sus!4v1721906748798!5m2!1sen!2sus"
              loading="lazy"
              className="mt-8 w-full h-[350px] md:h-[300px]"
              title="map"
            ></iframe>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="">
              <h2 className="mb-2 text-lg font-semibold uppercase text-primary">
                Company
              </h2>
              <ul className="text-gray-400 font-normal">
                <li className="mb-1">
                  <a
                    href="/job-openings"
                    className="text-white hover:text-primary"
                  >
                    Career Opportunities
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/legal-disclaimer"
                    className="text-white hover:text-primary"
                  >
                    Legal Disclaimer
                  </a>
                </li>
                <li className="mb-6">
                  <a href="/contact" className="text-white hover:text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
              <h2 className="text-lg mb-2 font-semibold uppercase text-primary">
                Investor Relations
              </h2>
              <ul className="text-gray-400 font-normal">
                <li className="mb-1">
                  <a
                    href="/board-of-directors"
                    className="text-white hover:text-primary"
                  >
                    Board of Directors
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/key-management-personnel-and-management-team"
                    className="text-white hover:text-primary"
                  >
                    Key Management Personnel
                  </a>
                </li>
              </ul>
              <h2 className="font-semibold uppercase text-primary">
                Social Media
              </h2>
              <div className="inline-flex items-center justify-center mt-2 gap-2">
                <a
                  href="https://www.facebook.com/Golden-Legand-Leasing-and-Finance-Ltd-556077534866589/?modal=admin_todo_tour"
                  className="text-white hover:text-primary text-2xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/LegandAnd"
                  className="text-white hover:text-primary text-2xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/goldenlegand/"
                  className="text-white hover:text-primary text-2xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/golden-legand-leasing-and-finance-ltd/"
                  className="text-white hover:text-primary text-2xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="">
              <h2 className="text-lg mb-2 font-semibold uppercase text-primary">
                Policies
              </h2>
              <ul className="text-gray-400 font-normal">
                <li className="mb-1">
                  <a
                    href="/privacy-policy"
                    className="text-white hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/foreclosure-cancellations"
                    className="text-white hover:text-primary"
                  >
                    Foreclosures and Cancellations
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/related-party-transaction-policy"
                    className="text-white hover:text-primary"
                  >
                    Related Party Transaction Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/website-content-archival-policy"
                    className="text-white hover:text-primary"
                  >
                    Website Content Archival Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/risk-management-policy"
                    className="text-white hover:text-primary"
                  >
                    Risk Management Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/data-retention-policy"
                    className="text-white hover:text-primary"
                  >
                    Data Retention Policy
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/refund-cancellation"
                    className="text-white hover:text-primary"
                  >
                    Refund & Cancellation
                  </a>
                </li>
              </ul>
              <h2 className="text-lg mb-2 font-semibold uppercase text-primary">
                Business
              </h2>
              <ul className="text-gray-400 font-normal">
                <li className="mb-1">
                  <a
                    href="/ashapurti-loans/"
                    className="text-white hover:text-primary"
                  >
                    Asha Purti Loans
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/bade-bhaisab/"
                    className="text-white hover:text-primary"
                  >
                    Bade Bhaisab
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/saral-sahayak/"
                    className="text-white hover:text-primary"
                  >
                    Saral Sahayak
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/india-fdi/"
                    className="text-white hover:text-primary"
                  >
                    India FDI
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/xoom-pay/"
                    className="text-white hover:text-primary"
                  >
                    Xoom Pay
                  </a>
                </li>
                <li className="">
                  <a
                    href="/farmedinindia/"
                    className="text-white hover:text-primary"
                  >
                    Farmed in India
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-lg mb-2 font-semibold uppercase text-primary">
                Contact Us
              </h2>
              <ul className="text-gray-400 font-normal">
                <li className="mb-3 flex items-start">
                  <div className="text-primary mt-1">
                    <FaLocationDot />
                  </div>
                  <div className="text-white ml-2">
                    202, Shri Ramkrishna Chambers, Plot No 67B, TPS – IV,
                    Linking Road, Khar (W), Mumbai – 400052, India
                  </div>
                </li>
                <li className="mb-3 flex items-center">
                  <div className="text-primary mt-1">
                    <IoMdMail />
                  </div>
                  <a
                    href="mailto:contact@gllfl.com.test"
                    className="text-white hover:text-primary ml-2"
                  >
                    contact@gllfl.com
                  </a>
                </li>
                <li className="mb-3 flex items-center">
                  <div className="text-primary mt-1">
                    <FaPhoneAlt />
                  </div>
                  <a
                    href="tel:+91 22 26000457 / 8"
                    className="text-white hover:text-primary ml-2"
                  >
                    +91 22 26000457 / 8
                  </a>
                </li>
              </ul>
              <div className="border-b border-gray-700">
                <h2 className="font-bold uppercase text-primary ms-2">
                  CIN No.:
                </h2>
                <div className="text-white text-sm ms-2 mb-2">
                  L65990MH1984PLC033818
                </div>
              </div>
              <div className="border-b border-gray-700">
                <h2 className="font-bold uppercase text-primary ms-2">
                  GST No.:
                </h2>
                <div className="text-white text-sm ms-2 mb-2">
                  27AAACG1540L1ZQ
                </div>
              </div>
              <div className="border-b border-gray-700">
                <h2 className="font-bold uppercase text-primary ms-2">
                  LEI No.:
                </h2>
                <div className="text-white text-sm ms-2 mb-2">
                  984500B851F5BNA97906
                </div>
              </div>
              <div className="border-b border-gray-700">
                <h2 className="font-bold uppercase text-primary ms-2">
                  Nasscom No.:
                </h2>
                <div className="text-white text-sm ms-2 mb-2">
                  984500B851F5BNA97906
                </div>
              </div>
              <div>
                <h2 className="font-bold uppercase text-primary ms-2">
                  RBI Registration No.:
                </h2>
                <div className="text-white text-sm ms-2">13.01171</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-6 bg-gray-800 flex items-center justify-center">
        <span className="text-sm text-gray-300 sm:text-center">
          © 2024{" "}
          <a href="/" className="text-white hover:text-primary">
            99softtech
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
