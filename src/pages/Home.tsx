// import HomeCard from "../components/HomeCard";
// import ClientSlider from "../components/ClientSlider";
// import ProjectsSlider from "../components/ProjectsSlider";
import bgImage from "../utils/images/Untitled-design-97.png";
import teamImg from "../utils/images/stories1-768x512.jpg";
// import Lottie from "react-lottie";
// import animationData from "../utils/animations/animation-financial-landing.json";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <img
        src={bgImage}
        alt="bgImage"
        width={1100}
        className="mb-0 md:h-[700px] h-[750px] rounded-r-lg object-cover md:mt-12 md:mb-24"
      />
      <div className="w-full h-auto md:w-150 bg-blue-500 rounded-lg md:absolute md:right-52 md:top-52 absolute top-96">
        <h2 className="md:p-12 md:pb-2 pt-12 ps-5 font-bold uppercase text-xl text-[#8cc90d]">
          An Overview
        </h2>
        <h2 className="md:p-12 md:pt-2 md:pb-2 pt-4 px-5 font-bold uppercase text-2xl text-white">
          IF YOU HAVE THE NEXT BIG IDEA, THIS IS A ONE STOP DESTINATION FOR YOUR
          VENTURE TO REACH YOUR GOAL
        </h2>
        <h3 className="md:p-12 md:pt-2 pt-8 pb-5 px-6 font-semibold text-lg text-gray-200">
          Harnessing our experience in the tech space, we have assembled the
          best team of professionals in the industry, creating an unparalleled
          experience in growth.
        </h3>
        <div className="flex md:justify-end justify-center px-12 pb-16">
          <a
            href="/read-more"
            className="text-white bg-primary hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-7 py-2.5 focus:outline-none"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold p-4">Our Projects</h1>
        <span className="border-b-8 border-primary w-32 mb-12"></span>
      </div>
      {/* <ProjectsSlider /> */}
      <div className="rounded-md border border-green-200 md:mx-52 mx-2 mb-24 shadow-md flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-28">
          <div className="relative flex flex-col justify-center items-center md:items-start">
            <h1 className="font-extrabold md:text-4xl text-2xl text-center md:text-left md:mt-0 mt-5">
              What We Do
            </h1>
            <h2 className="font-bold md:text-2xl text-md text-primary mt-4 text-center md:text-left">
              GLLFL is a trailblazing force, fusing the power of technology and
              financial expertise.
            </h2>
            <a
              href="/what-we-do"
              className="readmMoreBtn text-primary hover:bg-primary hover:text-white font-medium rounded-lg px-7 py-2.5 w-36 border border-gray-300 mt-5 self-center md:self-start"
            >
              Read More
            </a>
          </div>
          {/* <div className="flex items-center">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="md:text-4xl text-3xl font-extrabold p-4">
          Why the industry needs us
        </h1>
        <span className="border-b-8 border-primary w-32 mb-10"></span>
      </div>
      {/* <HomeCard /> */}
      <div className="flex justify-center my-5 md:flex-row flex-col md:ms-0 ms-4">
        <div className="flex flex-col md:w-100">
          <h4 className="font-extrabold text-2xl mb-6 mt-8">Our Team</h4>
          <span className="border-b-8 border-blue-500 w-12 mb-6"></span>
          <div className="font-bold text-2xl text-primary md:me-44 mb-4">
            Empowering Success Through Collaboration And Expertise
          </div>
          <p className="text-gray-700 md:me-24 me-1">
            GLLFL is dedicated to ethical business conduct and making positive
            contributions to the communities it operates.
          </p>
          <a
            href="/our-teams"
            className="text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg px-7 py-2.5 w-36 border border-gray-300 mt-5 md:self-start self-center mb-5"
          >
            Read More
          </a>
        </div>
        <img
          src={teamImg}
          alt="teamImg"
          width={500}
          className="rounded-xl -ms-2"
        />
      </div>
      {/* <ClientSlider /> */}
    </>
  );
}
