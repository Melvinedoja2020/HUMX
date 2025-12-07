import React from "react";
import { FaChair, FaGlassCheers, FaMusic, FaDollarSign } from "react-icons/fa";

const data = [
  {
    title: "Social Gatherings",
    text: "Intimate social events with flexible arrangements, perfect for family reunions, anniversaries, and casual celebrations.",
    icon: <FaChair className="text-xl text-green-800" />,
    list: [
      "Flexible seating",
      "Bar service",
      "Live music",
      "Starting from $115/person",
    ],
    price: "$115/person",
  },
  {
    title: "Wedding Celebrations",
    text: "A seamless environment for professional meetups, conferences, and team-building activities.",
    icon: <FaGlassCheers className="text-xl text-green-800" />,
    list: ["Executive seating", "Custom menus", "Audio support"],
    price: "$210/person",
  },
  {
    title: "Private Dinners",
    text: "Enjoy exclusive dining experiences with a personalized menu crafted by top chefs.",
    icon: <FaMusic className="text-xl text-green-800" />,
    list: ["Private rooms", "Candlelight setting", "Chef special menu"],
    price: "$150/person",
  },
  {
    title: "Special Ceremonies",
    text: "Perfect for engagements, proposals, and milestone celebrations that need elegance and privacy.",
    icon: <FaDollarSign className="text-xl text-green-800" />,
    list: ["Decor setup", "Special menu", "Photography"],
    price: "$150/person",
  },
];

const EventSection = () => {
  return (
    <div className="w-full py-10 px-5 md:px-20">
      <h1 className="text-6xl text-green-900 text-center md:text-4xl font-bold mb-10">
        Tailored Event Packages
      </h1>
      <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
        We offer a variety of hosting options tailored to your needs. Enjoy
        comfort, food, and unforgettable moments.
      </p>

      {/* 2 × 2 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:px-50 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 transition hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>

              <p className="text-gray-600 mb-4">{item.text}</p>

              {/* Buttons for each list item */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.list.map((point, i) => (
                  <button
                    key={i}
                    className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-lg hover:bg-green-800 hover:text-white transition"
                  >
                    {point}
                  </button>
                ))}
              </div>
            </div>

            {/* Price and Learn More */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-lg font-semibold text-green-800">
                {item.price}
              </span>
              <button className="flex items-center justify-center rounded-full px-4 py-2 text-lg border border-green-800 text-green-800 hover:bg-green-800 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
