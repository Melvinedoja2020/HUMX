import React from "react";
import img2 from "../assets/Galler2.webp";
import img5 from "../assets/Gallery5.webp";
import img7 from "../assets/Gallery7.webp";

const Exterior = () => {
  const images = [
    { src: img2, width: "w-6/12" },
    { src: img5, width: "w-5/12" },
    { src: img7, width: "w-7/12" },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 items-center">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`${img.width} overflow-hidden rounded-2xl mx-auto`}
        >
          <img
            src={img.src}
            alt={`Amenity ${idx + 1}`}
            className="w-full h-72 object-cover transform transition-transform duration-300 hover:scale-105 rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Exterior;
