import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { homeCardData } from "../utils/data/homeCardData";

export default function HomeCard() {
  
  return (
    <div className="flex md:flex-row flex-col justify-center">
      {homeCardData.map((content) => (
        <a
          href={content.href}
          key={content.id}
          className="border rounded-lg border-gray-300 shadow-lg my-14 md:mx-5 mx-2 md:w-100 hover:-translate-y-1 transition-transform pb-10"
        >
          <img
            src={content.img}
            alt="missionImg"
            width={80}
            className="rounded-md shadow-xl shadow-green-200 bg-[#2C76E3] -translate-y-10 ms-10"
          />
          <div className="flex justify-start">
            <h1 className="font-extrabold ms-10 -mt-4 text-2xl">
              {content.label}
            </h1>
            <FaRegArrowAltCircleRight className="text-primary text-2xl ms-4 -mt-3" />
          </div>
          <p className="font-medium text-md mx-10 mt-3 text-gray-600">
            {content.desc}
          </p>
        </a>
      ))}
    </div>
  );
}
