import React from "react";
import Exceptional from "../components/Exceptional ";
import TailoredEvent from "../components/TailoredEvent";
import EventPlanning from "../components/EventPlanning";

const Events = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="px-4 md:px-20 lg:px-40 bg-green-50">
        <div className="flex flex-wrap justify-between items-center p-4">
          <h1 className="mb-2 text-2xl font-bold">Events</h1>
          <nav className="flex flex-row items-center">
            <ol className="flex flex-row gap-2 text-gray-600">
              <li className="hover:cursor-pointer hover:underline">
                <a href="/">Home /</a>
              </li>
              <li className="hover:cursor-pointer hover:underline">Events</li>
            </ol>
          </nav>
        </div>
      </div>

      {/*  */}
      <div>
        <Exceptional />
      </div>
      {/* 2 */}
      <div>
        <TailoredEvent />
      </div>
      {/* 3 */}
      <div>
        <EventPlanning />
      </div>
    </div>
  );
};

export default Events;
