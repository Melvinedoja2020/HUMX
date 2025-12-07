import React from "react";
import MenueSwitcher from "../components/Menue";
import ResturantView from "../components/ResturantView.jsx";
import ChefSpecials from "../components/ChefSpecials.jsx";

const Resturant = () => {
  return (
    <div className="w-full">
      {/* ResturantView Section */}
      <div className="px-4 md:px-20 lg:px-40">
        <ResturantView />
      </div>

      {/* Menu Section */}
      <div className="px-4 md:px-20 lg:px-40 mt-10">
        <MenueSwitcher />
      </div>

      {/* Chef Specials Section */}
      <div className="px-4 md:px-20 lg:px-40 mt-10">
        <ChefSpecials />
      </div>
    </div>
  );
};

export default Resturant;
