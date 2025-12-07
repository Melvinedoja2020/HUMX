import React, { useState } from "react";
import AllPhotos from "../components/AllPhotos";
import Rooms from "../components/Rooms";
import Amenities from "../components/Amenities";
import Dining from "../components/Dining";
import Exterior from "../components/Exterior";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState("All Photos");

  const ButtonName = ["All Photos", "Rooms", "Amenities", "Dining", "Exterior"];

  return (
    <div>
      {/* Header Section */}
      <div className="px-4 md:px-20 lg:px-40 bg-green-50">
        <div className="flex flex-wrap justify-between items-center p-4">
          <h1 className="mb-2 text-2xl font-bold text-green-900">Gallery</h1>
          <nav className="flex flex-row items-center">
            <ol className="flex flex-row gap-2 text-green-700">
              <li className="hover:cursor-pointer hover:underline">
                <a href="/">Home /</a>
              </li>
              <li className="hover:cursor-pointer hover:underline">Gallery</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Buttons and Content */}
      <div className="p-4">
        <div className="flex justify-center items-center mt-12 gap-2 mb-4 flex-wrap">
          {ButtonName.map((key) => (
            <button
              key={key}
              onClick={() => setActiveButton(key)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeButton === key
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-300"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Display the content for the selected button */}
        <div className="mt-16 lg:px-40 px-4 text-center ">
          {/* for All Photos */}
          <div>{activeButton === "All Photos" && <AllPhotos />}</div>

          {/* for All  Rooms */}
          <div>{activeButton === "Rooms" && <Rooms />}</div>

          {/* for All Amenities */}
          <div>{activeButton === "Amenities" && <Amenities />}</div>

          {/* for All Dining */}
          <div>{activeButton === "Dining" && <Dining />}</div>
          {/* for All Exterior */}
          <div>{activeButton === "Exterior" && <Exterior />}</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
