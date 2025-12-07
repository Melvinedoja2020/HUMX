import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

import img4 from "../assets/Event1.webp";
import img5 from "../assets/Event2.webp";
import img6 from "../assets/Event3.webp";

import { BsSoundwave, BsCupHot } from "react-icons/bs";
import { IoWifiSharp } from "react-icons/io5";

const Exceptional = () => {
  const images = [img1, img2, img3];

  const SecondData = [
    {
      h1: "Advanced Audio/Visual",
      p: "State-of-the-art sound systems and projection equipment.",
      icon: <BsSoundwave className="text-4xl text-purple-600" />,
    },
    {
      h1: "High-Speed Connectivity",
      p: "Complimentary high-speed internet throughout all venues.",
      icon: <IoWifiSharp className="text-4xl text-blue-600" />,
    },
    {
      h1: "Premium Catering",
      p: "Exquisite menus and personalized service to delight your guests.",
      icon: <BsCupHot className="text-4xl text-green-600" />,
    },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-40 py-16 text-center">
      {/* Header */}
      <h1 className="text-green-900 text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
        Exceptional Events & Celebrations
      </h1>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-14">
        Explore some of our finest dishes and experiences crafted with love and
        attention to detail. These moments capture the heart of our hospitality.
      </p>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
          >
            <img
              src={image}
              className="
                w-full h-72 sm:h-80 object-cover rounded-2xl 
                transition-all duration-500 group-hover:scale-110 group-hover:brightness-75
              "
            />

            {/* overlay */}
            <div
              className="
                absolute inset-0 bg-black/30 opacity-0 
                group-hover:opacity-100 transition-all duration-500
              "
            />

            {/* bottom glow */}
            <div
              className="
                absolute bottom-0 left-0 right-0 h-1 
                bg-linear-to-r from-red-500 to-yellow-500 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500
              "
            />
          </div>
        ))}
      </div>

      {/* Text + icons + images */}
      <div className="px-4 sm:px-10 lg:px-40">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
          {/* Left text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              World-Class Event Facilities
            </h2>

            <p className="text-gray-700 text-lg">
              Our event centers are designed to elevate your occasions with
              top-tier amenities, exceptional comfort, and modern elegance.
            </p>

            {/* Icon Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 p-4">
              {SecondData.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white shadow-lg rounded-2xl p-6 
                    hover:scale-105 transition-transform duration-300
                    flex flex-col items-center text-center
                  "
                >
                  <div className="flex flex-row items-center gap-4 mb-3">
                    {item.icon}
                    <h1 className="text-xl font-bold">{item.h1}</h1>
                  </div>

                  <p className="text-gray-600">{item.p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right images */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <img
              src={img6}
              className="
                w-full h-64 sm:h-80 object-cover rounded-xl 
                shadow-xl hover:shadow-2xl transition-all
              "
            />

            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={img4}
                className="
                  p-6 shadow-xl rounded-xl hover:shadow-2xl transition-all 
                  flex-1 min-w-[200px] bg-white
                "
              />

              <img
                src={img5}
                className="
                  p-6 shadow-xl rounded-xl hover:shadow-2xl transition-all 
                  flex-1 min-w-[200px] bg-white
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
