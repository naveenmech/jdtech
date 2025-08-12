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
    <div className="">
      {/* Show only the current image */}
      <Image
        key={current}
        src={images[current].src}
        alt={images[current].alt}
        width={2000}
        height={2000}
        priority
        className="w-[300rem] h-[25rem] transition-opacity duration-500"
      />

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
