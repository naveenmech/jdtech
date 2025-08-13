"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

type ImageItem = {
  src: any;
  alt: any;
};

type ImageSwiperProps = {
  images: ImageItem[];
};

const ImageSwiper = ({ images }: ImageSwiperProps) => {
  console.log(images);
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.2, centeredSlides: true },
          640: { slidesPerView: 2.3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!py-6"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-500">
              {/* Red hover animation inside card */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-red-50 to-red-100 transition-transform duration-300 ease-out pointer-events-none" />

              {/* Smaller image perfectly centered inside card */}
              <div className="relative flex items-center justify-center h-[120px] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={100}
                  height={100}
                  className="object-contain h-[100px] w-auto"
                  priority={index < 4}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
