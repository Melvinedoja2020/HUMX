import React from "react";
import {
  FaCalendarAlt,
  FaUserTie,
  FaUtensils,
  FaMusic,
  FaChair,
  FaGift,
} from "react-icons/fa";

const coordinationData = [
  {
    title: "Event Coordination",
    text: "Dedicated coordinators to manage every detail from start to finish.",
    icon: <FaCalendarAlt className="text-3xl text-green-800" />,
  },
  {
    title: "Vendor Management",
    text: "We handle all vendor communication and contracts for your peace of mind.",
    icon: <FaUserTie className="text-3xl text-green-800" />,
  },
  {
    title: "Catering Services",
    text: "Delicious menus curated for your event with professional staff.",
    icon: <FaUtensils className="text-3xl text-green-800" />,
  },
  {
    title: "Entertainment",
    text: "Live music and entertainment to keep your guests engaged and happy.",
    icon: <FaMusic className="text-3xl text-green-800" />,
  },
  {
    title: "Seating & Decor",
    text: "Customized seating arrangements and decor to match your theme.",
    icon: <FaChair className="text-3xl text-green-800" />,
  },
  {
    title: "Gifts & Favors",
    text: "Thoughtful gift arrangements and favors for your guests.",
    icon: <FaGift className="text-3xl text-green-800" />,
  },
];

const EventPlanning = () => {
  return (
    <div className="w-full mt-10 px-5 md:px-20 py-12 flex flex-col lg:flex-row lg:px-50 gap-4">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-5xl font-bold text-center text-green-900 mb-4 sm:text-4xl">
          Complete Event Planning
        </h1>
        <p className="text-gray-600 text-lg">
          Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus
          nibh.
        </p>

        <div className="flex items-center justify-center">
          <button className=" mt-4 w-max px-6 py-3 text-lg border border-green-800 text-green-800 rounded-lg hover:bg-green-800 hover:text-white transition">
            Contact Our Team
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {coordinationData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center gap-3"
          >
            <div>{item.icon}</div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPlanning;
