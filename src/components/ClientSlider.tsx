import { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import quoteImg from "../utils/images/Icon.png";
import { FaStar } from "react-icons/fa";
import { comments } from "../utils/data/commentsData";

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsToShow, setItemsToShow] = useState<number>(3);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (isTransitioning) {
      if (currentIndex === comments.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 500);
      } else if (currentIndex === -1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(comments.length - 1);
        }, 500);
      } else {
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="flex md:flex-row flex-col justify-evenly my-24 pl-4 pr-4">
      <div className="flex-col flex md:py-12">
        <div className="text-center md:text-left text-2xl font-extrabold md:w-44 self-center">
          What Our Clients Say About Us:{" "}
        </div>
        <div className="flex md:mt-12 mt-6 md:self-start self-center">
          <button onClick={prevSlide}>
            <CiCircleChevLeft className="text-4xl hover:text-primary" />
          </button>
          <button onClick={nextSlide}>
            <CiCircleChevRight className="text-4xl hover:text-primary" />
          </button>
        </div>
      </div>
      <div className="relative md:w-[1150px] overflow-hidden py-12">
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {[...comments, ...comments].map((comment, index) => (
            <div className="flex flex-col">
              <div
                key={index}
                className={`${
                  itemsToShow === 1 ? "w-[275px]" : "w-[350px]"
                } h-full md:h-[170px] ml-0 mr-4 md:mx-4 rounded-xl shadow-md flex-shrink-0 pb-4 border border-solid border-[#fbfbfb]`}
              >
                <img
                  src={quoteImg}
                  alt="quoteImg"
                  width={50}
                  className="rounded-md shadow-md shadow-green-200 -translate-y-5 ms-5"
                />
                <div className="font-medium text-gray-500 text-md mx-5 leading-6">
                  {comment.text}
                </div>
                <div className="flex absolute mx-5 bottom-4 md:bottom-16">
                  {[...Array(comment.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="font-semibold text-md ms-8 mt-4 text-gray-800">
                {comment.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
