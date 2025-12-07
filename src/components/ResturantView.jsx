import React from "react";
import { BiAward, BiTrophy } from "react-icons/bi";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

const ResturantView = () => {
  const data = [
    {
      icon: <BiAward className="text-3xl text-green-600" />,
      h2: "Have a Beer",
      text: "Enjoy a cold beer after work or during your weekends.",
    },
    {
      icon: <BiTrophy className="text-3xl text-yellow-600" />,
      h2: "Morning Coffee",
      text: "Start your day with a hot cup of coffee to stay energized.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="px-4 md:px-20 lg:px-40 bg-green-50">
        <div className="flex flex-wrap justify-between items-center p-4">
          <h1 className="mb-2 text-2xl font-bold">Restaurant</h1>
          <nav className="flex flex-row items-center">
            <ol className="flex flex-row gap-2 text-gray-600">
              <li className="hover:cursor-pointer hover:underline">
                <a href="/">Home /</a>
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Restaurant
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 md:px-20 lg:px-40">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-4">
              Experience Our Unique Approach
            </h2>

            <p className="text-gray-700 text-lg mb-4">
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Vestibulum id ligula porta felis euismod semper.
            </p>

            <p className="text-gray-700 text-sm mb-4">
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Curabitur blandit tempus porttitor.
            </p>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 p-6 shadow-xl rounded-lg hover:shadow-2xl transition-all flex-1 min-w-[220px] bg-white"
                >
                  <div>{item.icon}</div>
                  <div>
                    <h2 className="text-xl font-bold mb-4">{item.h2}</h2>
                    <p className="text-gray-700 mb-4">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="flex gap-4">
              <img
                src={img1}
                className="w-1/2 h-40 sm:h-48 object-cover rounded-lg"
              />
              <img
                src={img2}
                className="w-1/2 h-40 sm:h-48 object-cover rounded-lg"
              />
            </div>
            <img
              src={img3}
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantView;
