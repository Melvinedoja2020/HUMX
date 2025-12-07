import React, { useState } from "react";
import AllMenue from "./AllMenue";

const MenueSwitcher = () => {
  const [active, setActive] = useState(0);

  // Button names you provided
  const buttons = ["All", "Starters", "Main Courses", "Desserts", "Drinks"];

  // Content that should show when each button is clicked
  const details = [
    {
      title: "Bruschetta Trio",
      text: "Explore our entire menu selection, featuring a delightful mix of flavors from every category.",
    },
    {
      title: "Starters",
      text: "Kick off your meal with delicious appetizers crafted to excite your taste buds.",
    },
    {
      title: "Main Courses",
      text: "Satisfy your hunger with hearty and flavorful main dishes prepared with care.",
    },
    {
      title: "Desserts",
      text: "Indulge in sweet treats and delightful creations to end your meal perfectly.",
    },
    {
      title: "Drinks",
      text: "Refresh yourself with our selection of beverages, from chill juices to warm delights.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl text-center font-bold mb-4 uppercase text-black">
        Menu
      </h1>

      <p className="text-gray-500 text-lg text-center mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 pt-6 mb-8">
        {buttons.map((name, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`py-2 px-4 rounded-full border transition 
              ${
                active === index
                  ? "bg-green-800 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Displayed content */}
      <div>{active === 0 && <AllMenue />}</div>
    </div>
  );
};

export default MenueSwitcher;
