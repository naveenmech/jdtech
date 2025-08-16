import Image from "next/image";
import { useEffect, useState } from "react";

type SlideImageProps = {
  images: { src: string; alt: string }[];
};

const SlideImage = ({ images }: SlideImageProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-[25rem]">
      {/* Slide wrapper with translate animation */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0 relative h-[25rem]">
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              priority={i === current}
            />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="focus:outline-none group transition-all duration-300 cursor-pointer"
          >
            {i === current ? (
              <span className="h-[8px] w-[8px] rounded-full bg-[#EE3131] block transition-all duration-300 ease-in-out" />
            ) : (
              <span className="h-[8px] w-[8px] rounded-full bg-white opacity-50 block transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:h-[6px] group-hover:w-[12px] group-hover:bg-[#EE3131]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideImage;
