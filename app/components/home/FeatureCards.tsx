import Image from "next/image";
import { dosis } from "../commonComponent/fontDosis";

interface IndustryCard {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const industryCards: IndustryCard[] = [
  {
    id: 1,
    title: "Tire industry",
    image: "/images/feature-1.jpeg",
    alt: "Tire manufacturing facility with advanced machinery",
  },
  {
    id: 2,
    title: "Ceramic industry",
    image: "/images/feature-2.jpeg",
    alt: "Ceramic products in various stages of production",
  },
  {
    id: 3,
    title: "Chemical industry",
    image: "/images/feature-3.jpeg",
    alt: "Chemical processing plant with safety equipment",
  },
  {
    id: 4,
    title: "Automobile industry",
    image: "/images/feature-4.jpeg",
    alt: "Automobile assembly line with modern robotics",
  },
  {
    id: 5,
    title: "Cement industry",
    image: "/images/feature-5.jpeg",
    alt: "Cement factory with large production equipment",
  },
  {
    id: 6,
    title: "Special purpose machine",
    image: "/images/feature-6.jpeg",
    alt: "Custom industrial machinery for specialized applications",
  },
  {
    id: 7,
    title: "Oil and Gas",
    image: "/images/feature-7.jpeg",
    alt: "Oil refinery with complex piping systems",
  },
  {
    id: 8,
    title: "Glass industry",
    image: "/images/feature-8.jpeg",
    alt: "Glass manufacturing process with molten glass",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`mb-5 text-center text-3xl font-medium text-black ${dosis.className}`}
        >
          We Care Our Feature Support In
        </h2>

        {/* dotted lines */}
        <div className="mt-2 flex justify-center items-center gap-2 mb-10">
          {/* Three red dots */}
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>

          {/* Red horizontal line */}
          <div className="flex-1 h-1 max-w-[12rem] bg-red-700 rounded-2xl"></div>
        </div>
        {/*  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryCards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 h-48 relative">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              </div>

              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:translate-y-2">
                  {card.title}
                </h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center mx-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-gray-700">
                    Learn more about our {card.title.toLowerCase()} solutions
                  </p>
                  <button className="mt-2 px-4 py-1.5 text-xs font-medium rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
