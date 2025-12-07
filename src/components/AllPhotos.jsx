import React, { useState } from "react";
import { AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import img1 from "../assets/Gallery1.webp";
import img2 from "../assets/Galler2.webp";
import img3 from "../assets/Gallery3.webp";
import img4 from "../assets/Gallery4.webp";
import img5 from "../assets/Gallery5.webp";
import img6 from "../assets/Gallery6.webp";
import img7 from "../assets/Gallery7.webp";
import img8 from "../assets/Gallery8.webp";
import img9 from "../assets/Gallery9.webp";
import img10 from "../assets/Gallery10.webp";
import img11 from "../assets/Gallery11.webp";
import img12 from "../assets/Gallery12.webp";

const AllPhotos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const renderImage = (img, customClass = "") => (
    <div className="relative group w-full cursor-pointer">
      <img
        src={img}
        alt="hotel"
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
      {/* Section 1 */}
      <div className="flex flex-col mb-8 gap-6 md:flex-row">
        {renderImage(img1, "flex-1")}
        {renderImage(img2, "flex-2")}
      </div>

      {/* Section 2 */}
      <div className="flex flex-col mb-8 gap-6 md:flex-row">
        {renderImage(img3)}
        {renderImage(img4)}
        {renderImage(img5)}
      </div>

      {/* Section 3 */}
      <div className="flex flex-col mb-8 gap-6 md:flex-row">
        {renderImage(img6, "flex-2")}
        {renderImage(img7, "flex-1")}
      </div>

      {/* Section 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:grid">
        {renderImage(img8)}
        {renderImage(img9)}
        {renderImage(img10)}
        {renderImage(img12)}
        {renderImage(img11)}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <img
              src={selectedImg}
              alt="Enlarged"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-white text-3xl p-1 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPhotos;
