import React from "react";
import img1 from "../assets/menuImg1.webp";
import img2 from "../assets/menuImg2.webp";
import img3 from "../assets/menuImg3.webp";
import img4 from "../assets/menuImg4.webp";
import img5 from "../assets/menuImg5.webp";
import img6 from "../assets/menuImg6.webp";
import img7 from "../assets/menuImg7.webp";
import img8 from "../assets/menuImg8.webp";

const menuData = [
  {
    id: 1,
    image: img1,
    title: "Spicy Chicken",
    paragraph: "A delicious spicy seasoned grilled chicken.",
    description: "Perfectly balanced spices with a smoky finish.",
    price: "$12.99",
    type: "Vegetarian",
  },
  {
    id: 2,
    image: img2,
    title: "Fresh Salad",
    paragraph: "A refreshing bowl of vegetables.",
    description: "Made with organic lettuce, tomatoes, and cucumber.",
    price: "$12.99",
    type: "Vegetarian",
  },
  {
    id: 3,
    image: img3,
    title: "Beef Steak",
    paragraph: "Tender grilled steak cooked to perfection.",
    description: "Soft, juicy, and rich in flavor.",
    price: "$12.99",
    type: "Gluten Free",
  },
  {
    id: 4,
    image: img4,
    title: "Chocolate Cake",
    paragraph: "A slice of heaven for chocolate lovers.",
    description: "Moist and rich with a creamy chocolate layer.",
    price: "$12.99",
    type: "Alcoholic",
  },
  {
    id: 5,
    image: img5,
    title: "Cold Smoothie",
    paragraph: "A chilled tropical fruit smoothie.",
    description: "Blended with mango, pineapple, and banana.",
    price: "$12.99",
    type: "Seafood",
  },
  {
    id: 6,
    image: img6,
    title: "Veggie Pizza",
    paragraph: "A pizza loaded with fresh vegetables.",
    description: "Tomatoes, bell peppers, olives, and sweetcorn.",
    price: "$12.99",
    type: "Chef's Choice",
  },
  {
    id: 7,
    image: img7,
    title: "Seafood Pasta",
    paragraph: "Creamy pasta topped with fresh seafood.",
    description: "Shrimps, mussels, calamari in creamy sauce.",
    price: "$12.99",
    type: "Classic",
  },
  {
    id: 8,
    image: img8,
    title: "Fruit Bowl",
    paragraph: "A refreshing mixture of sliced fruits.",
    description: "Seasonal fruits served chilled.",
    price: "$12.99",
    type: "Non-Alcoholic",
  },
];

const AllMenue = () => {
  const leftSide = menuData.slice(0, 4);
  const rightSide = menuData.slice(4, 8);

  const renderCard = (item) => (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row gap-4 p-5 shadow-lg rounded-xl hover:shadow-2xl transition-transform bg-white hover:scale-[1.02]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full sm:w-28 h-28 object-cover rounded-lg shrink-0"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-gray-600">{item.paragraph}</p>
        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        <div className="flex justify-between mt-2">
          <span className="font-bold text-green-600">{item.price}</span>
          <span className="text-sm text-gray-400 italic">{item.type}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase">
        Our Menu Items
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          {leftSide.map(renderCard)}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          {rightSide.map(renderCard)}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default AllMenue;
