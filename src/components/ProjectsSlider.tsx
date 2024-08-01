import { useState, useEffect } from "react";
import { projectData } from "../utils/data/projectData";

export default function ProjectsSlider() {
  const data = projectData.filter(x => x.home)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
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
    <div className="flex justify-center mb-24">
      {[...data, ...data]
        .slice(currentIndex, currentIndex + itemsToShow)
        .map((image, index) => (image.home &&
          <a
            href={image.href}
            className="flex flex-col items-center m-2"
            key={image.id}
          >
            <img
              key={index}
              src={image.img}
              alt={`Slide ${currentIndex + index}`}
              className={`h-[300px] m-4 rounded-xl shadow-2xl`}
            />
            <div className="text-primary font-bold text-xl mt-1">
              {image.label}
            </div>
          </a>
        ))}
    </div>
  );
};