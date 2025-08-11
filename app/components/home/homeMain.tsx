"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/images/Home_1.jpg", alt: "Home 1" },
  { src: "/images/Home_2.jpg", alt: "Home 2" },
  { src: "/images/Home_3.jpeg", alt: "Home 3" },
];

export default function HomeMain() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[27rem] overflow-hidden">
      {/* Image */}
      <Image
        src={images[current].src}
        alt={images[current].alt}
        width={2000}
        height={2000}
        priority
        className="w-[300rem] h-[25rem]"
      />
      {/* Bottom Navigation */}
      {/* <div className="absolute mt-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="focus:outline-none group"
          >
            {i === current ? (
              <span
                className="
            h-[4px] w-[40px] rounded-full bg-red-600 block
            transition-all duration-500 ease-in-out
            group-hover:scale-110
          "
              />
            ) : (
              <span
                className="
            h-[8px] w-[8px] rounded-full bg-red-600 opacity-50 block
            transition-all duration-500 ease-in-out
            group-hover:scale-125 group-hover:opacity-80
          "
              />
            )}
          </button>
        ))}
      </div> */}
      {/* Enhanced Bottom Navigation */}
      <div className="absolute mt-1 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="focus:outline-none group transition-all duration-300 cursor-pointer"
          >
            {i === current ? (
              <span className="h-[4px] w-[100px] rounded-full bg-[#EE3131] block transition-all duration-300 ease-in-out" />
            ) : (
              <span className="h-[8px] w-[8px] rounded-full bg-[#EE3131] opacity-50 block transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:h-[6px] group-hover:w-[12px]" />
            )}
          </button>
        ))}
      </div>

      {/* Optional: Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200/50">
        <div
          className="h-full bg-[#EE3131] transition-all duration-5000 ease-linear"
          style={{
            width: `${100 / images.length}%`,
            transform: `translateX(${current * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
