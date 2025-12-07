import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

import img3 from "../assets/Gallery3.webp";
import img4 from "../assets/Gallery4.webp";
import img5 from "../assets/Gallery5.webp";

const Dining = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [img3, img4, img5];

  const renderImage = (img, customClass = "") => (
    <div className="relative group w-full cursor-pointer">
      <img
        src={img}
        alt="dining"
        className={`h-70 rounded-2xl w-full ${customClass} object-cover transform transition-transform duration-300 group-hover:scale-105`}
        onClick={() => setSelectedImg(img)}
      />
      {/* Blur overlay with eye icon */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
        <AiOutlineEye className="text-white text-3xl" />
      </div>
    </div>
  );

  return (
    <div>
      {/* Section: mapped images */}
      <div className="flex flex-col mb-8 gap-6 md:flex-row">
        {images.map((img, idx) => (
          <div key={idx}>{renderImage(img)}</div>
        ))}
      </div>
    </div>
  );
};

export default Dining;
