"use client";
import FeatureCards from "./FeatureCards";
import SlideImage from "../commonComponent/slideImage";
import { WelcomeToJDTech } from "./welcomeToJDTech";

const images = [
  { src: "/images/Home_1.jpg", alt: "Home 1" },
  { src: "/images/Home_2.jpg", alt: "Home 2" },
  { src: "/images/Home_3.jpeg", alt: "Home 3" },
];

export default function HomeMain() {
  return (
    <>
      {/* Slideshow */}
      <div className="relative w-full h-[25rem] overflow-hidden">
        {/* Image */}
        <SlideImage images={images} />

        {/* Optional: Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200/50">
          <div
            className="h-full bg-[#EE3131] transition-all duration-[5000ms] ease-linear"
            style={{
              width: `${100 / images.length}%`,
              transform: `translateX(${current * 100}%)`,
            }}
          />
        </div> */}
      </div>
      {/* Welcome Message */}
      <WelcomeToJDTech />
      <FeatureCards />
    </>
  );
}
