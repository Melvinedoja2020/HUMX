import React from "react";
import img1 from "../assets/Gallery1.webp";
import img3 from "../assets/Gallery3.webp";
import img7 from "../assets/Gallery7.webp";
import img8 from "../assets/Gallery8.webp";
import img12 from "../assets/Gallery12.webp";

const Rooms = () => {
  const images = [img1, img3, img7, img8, img12];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {images.map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-2xl">
          <img
            src={img}
            alt={`Room ${idx + 1}`}
            className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default Rooms;
