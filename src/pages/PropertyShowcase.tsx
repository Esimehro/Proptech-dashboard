import React, { useState } from "react";
import img2 from "../assets/images/img3.png";
import img3 from "../assets/images/imgg@2x.png";

interface PropertyCard {
  id: number;
  image: string;
  label: string;
  title: string;
  activeSlide: number;
}

const PropertyShowcase: React.FC = () => {
  const properties: PropertyCard[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      label: "MOST CLICKED",
      title: "Urban Prime Plaza Premiere",
      activeSlide: 0,
    },
    {
      id: 2,
      image: img2,
      label: "MOST WATCHLISTED",
      title: "Urban Prime Plaza Premiere",
      activeSlide: 1,
    },
    {
      id: 3,
      image: img3,
      label: "HOTTEST LISTING",
      title: "Urban Prime Plaza Premiere",
      activeSlide: 2,
    },
  ];

  const [activeCards, setActiveCards] = useState<number[]>([0, 1, 2]);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-6">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${property.image})`,
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end px-4 py-2">
                {/* Top Label */}
                <div>
                  <span className="text-white text-sm font-medium tracking-widest">
                    {property.label}
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-4">
                    {property.title}
                  </h3>

                  {/* Dots Indicator */}
                  <div className="flex gap-2 items-center justify-center">
                    {[0, 1, 2].map((dot) => (
                      <div
                        key={dot}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          dot === property.activeSlide
                            ? "bg-white w-8"
                            : "bg-white/50"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Button - Only show on third card */}
              {property.id === 3 && (
                <div className="absolute top-6 right-6">
                  <button className="bg-[#242526] hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.4 21.86 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                        fill="white"
                      />
                      <path
                        d="M17.75 15.6C19.02 15.6 20.09 15.18 20.83 14.43C21.58 13.69 22 12.62 22 11.35V6.25C22 3.9 20.1 2 17.75 2H9.25C6.9 2 5 3.9 5 6.25V7C5 7.28 5.22 7.5 5.5 7.5H12.19C14.9 7.5 17.09 9.69 17.09 12.4V15.1C17.09 15.38 17.31 15.6 17.59 15.6H17.75Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;
