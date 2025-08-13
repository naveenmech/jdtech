import React from "react";
import { dosis } from "../commonComponent/fontDosis";
import ImageSwiper from "../commonComponent/ImageSwiper";

// const images = Array.from({ length: 19 }, (_, i) => ({
//   src: `/images/product-${i + 1}.png`,
//   alt: `Product ${i + 1}`,
// }));

const images = [
  { src: '/images/product-1.png', alt: 'Product 1' },
  { src: '/images/product-2.png', alt: 'Product 2' },
  { src: '/images/product-3.png', alt: 'Product 3' },
  { src: '/images/product-4.png', alt: 'Product 4' },
  { src: '/images/product-5.png', alt: 'Product 5' },
  { src: '/images/product-6.png', alt: 'Product 6' },
  { src: '/images/product-7.png', alt: 'Product 7' },
  { src: '/images/product-8.png', alt: 'Product 8' },
  { src: '/images/product-9.png', alt: 'Product 9' },
  { src: '/images/product-10.png', alt: 'Product 10' },
  { src: '/images/product-11.png', alt: 'Product 11' },
  { src: '/images/product-12.png', alt: 'Product 12' },
  { src: '/images/product-13.png', alt: 'Product 13' },
  { src: '/images/product-14.png', alt: 'Product 14' },
  { src: '/images/product-15.png', alt: 'Product 15' },
  { src: '/images/product-16.png', alt: 'Product 16' },
  { src: '/images/product-17.png', alt: 'Product 17' },
  { src: '/images/product-18.png', alt: 'Product 18' },
  { src: '/images/product-19.png', alt: 'Product 19' },
  ];


const OurProducts = () => {
  return (
    <>
      {/* Welcome Message */}
      <section className="py-6 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className={`mb-4 text-3xl font-medium text-black ${dosis.className}`}
        >
          Our Products
        </h2>

        {/* dotted lines */}
        <div className="flex justify-center items-center gap-2">
          {/* Three red dots */}
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>

          {/* Red horizontal line */}
          <div className="flex-1 h-1 max-w-[7rem] bg-red-700 rounded-2xl"></div>
        </div>
        <ImageSwiper images={images} />
      </section>
    </>
  );
};

export default OurProducts;
