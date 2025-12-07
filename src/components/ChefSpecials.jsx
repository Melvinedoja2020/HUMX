import React from "react";
import img1 from "../assets/menuImg2.webp";
import img2 from "../assets/menuImg1.webp";

const ChefSpecials = () => {
  const dishesData = [
    {
      id: 1,
      labels: ["Special", "Spicy"],
      title: "Signature Ribeye Steak",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan risus ut dui pretium, eget elementum nisi.",
      price: "$32.99",
      image: img1,
    },
    {
      id: 2,
      labels: ["Special"],
      title: "Grilled Salmon Fillet",
      description:
        "A perfectly grilled salmon fillet served with fresh vegetables and a lemon butter sauce.",
      price: "$28.50",
      image: img2,
    },
  ];

  // Optional: color for each label
  const labelColors = {
    Special: "bg-yellow-100 text-yellow-800",
    Spicy: "bg-red-100 text-red-700",
  };

  return (
    <div className="px-4 sm:px-8 lg:px-36 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Chef's Specials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {dishesData.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={dish.image}
              alt={dish.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {dish.labels.map((label, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      labelColors[label] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {dish.title}
              </h3>
              <p className="text-gray-600 mb-3 text-sm sm:text-base">
                {dish.description}
              </p>
              <p className="font-semibold text-gray-800 text-base sm:text-lg">
                {dish.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSpecials;
