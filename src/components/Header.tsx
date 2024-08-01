import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import companyLogo from "../utils/images/cropped-GLLFL-Logo.png";
import investorsImg from "../utils/images/investorimg.png";
import { headerDropdownData } from "../utils/data/headerDropdownData";
import Container from "./Container";
import { HomeDropDown } from "../helpers/types";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState<HomeDropDown | any>({
    about: false,
    projects: false,
    investors: false,
  });

  const handleMouseEnter = (name: string) => {
    setDropdown((prevState: any) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleMouseLeave = (name: string) => {
    setDropdown((prevState: any) => ({
      ...prevState,
      [name]: false,
    }));
  };

  const handleDropdownClick = (name: string) => {
    setDropdown((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <header className="sticky top-0 z-50 p-3 shadow-md shadow-gray-200 bg-white">
      <Container className="flex items-center justify-between gap-8">
        <a href="/" className="flex items-center h-12">
          <img width={220} src={companyLogo} alt="Company Logo" />
        </a>
        <div className="flex items-center justify-between lg:gap-8 w-full">
          <nav className="hidden lg:flex justify-start items-center gap-7 font-semibold ml-4 text-gray-600">
            {headerDropdownData.map((dropdownItem: any) => (
              <div
                key={dropdownItem.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(dropdownItem.name)}
                onMouseLeave={() => handleMouseLeave(dropdownItem.name)}
              >
                <div
                  className={`${dropdown[dropdownItem.name] ? "text-primary" : ""} 
                  inline-flex items-center gap-1 cursor-pointer`}
                >
                  {dropdownItem.name.charAt(0).toUpperCase() +
                    dropdownItem.name.slice(1)}{" "}
                  <IoIosArrowDown />
                </div>
                {dropdown[dropdownItem.name] && (
                  <div
                    className={`absolute bg-white shadow-lg rounded-lg py-2 z-50 ${
                      dropdownItem.name === "investors Corner"
                        ? "w-175 grid grid-cols-3"
                        : "w-48"
                    }`}
                  >
                    {dropdownItem.name === "investors Corner" ? (
                      <img
                        src={investorsImg}
                        alt="investorsImg"
                        className="row-span-10 h-[15rem]"
                      />
                    ) : (
                      <></>
                    )}
                    {dropdownItem.items.map((item: any) => (
                      <a
                        key={item.label}
                        href={item.link}
                        className="block px-4 py-2 hover:text-primary"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/job-openings"
              className="hover:text-primary items-center gap-1 cursor-pointer"
            >
              Careers
            </a>
          </nav>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden font-bold text-xl hover:text-gray-500 ms-auto"
          >
            {!showMenu && <GiHamburgerMenu />}
          </button>
          {showMenu && (
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
          )}
          <div
            className={`fixed overflow-scroll top-0 right-0 h-full bg-gray-100 shadow-lg transition-transform transform ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } w-80 lg:hidden z-50`}
          >
            <div className="p-4 flex justify-between items-center">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="font-bold text-xl hover:text-gray-500"
              >
                {showMenu && <GrClose />}
              </button>
            </div>
            <nav className="flex flex-col items-start p-4 gap-4 font-semibold">
              {headerDropdownData.map((dropdownItem) => (
                <div key={dropdownItem.name} className="w-full">
                  <div
                    className="flex justify-between items-center w-full cursor-pointer"
                    onClick={() => handleDropdownClick(dropdownItem.name)}
                  >
                    <span>
                      {dropdownItem.name.charAt(0).toUpperCase() +
                        dropdownItem.name.slice(1)}
                    </span>
                    <IoIosArrowDown />
                  </div>
                  {dropdown[dropdownItem.name] && (
                    <div className="pl-4">
                      {dropdownItem.items.map((item: any) => (
                        <a
                          key={item.label}
                          href={item.link}
                          className="block py-2 hover:text-primary"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/job-openings"
                className="hover:text-gray-500 w-full text-left mb-8"
              >
                Career
              </a>
            </nav>
            <a
              href="/pay-emi"
              className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 focus:outline-none m-4"
            >
              Pay EMI
            </a>
            <a
              href="/contact"
              className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 focus:outline-none m-4"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center justify-end gap-4">
            {/* <a
              href="/pay-emi"
              className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 focus:outline-none hidden lg:flex"
            >
              Pay EMI
            </a> */}
            <a
              href="/contact"
              className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 focus:outline-none hidden lg:flex"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
