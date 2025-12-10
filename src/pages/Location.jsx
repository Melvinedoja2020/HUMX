import React from "react";
import { motion as Motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock, FiArrowUp } from "react-icons/fi";
import {
  MdLocationOn,
  MdDirectionsCar,
  MdTrain,
  MdFlight,
  MdLocalTaxi,
} from "react-icons/md";

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Map */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
                <MdLocationOn className="text-teal-700" />
                <span className="text-sm font-medium text-gray-700">
                  Prime Location
                </span>
              </div>

              <h1 className="text-5xl font-semibold text-gray-900 mb-6">
                Luxury Downtown Experience
              </h1>

              <p className="text-gray-600 leading-relaxed mb-12">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae. Donec rutrum congue leo eget malesuada.
                Proin eget tortor risus cras ultricies ligula sed magna dictum
                porta.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdLocationOn className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-sm text-gray-600">789 Madison Street</p>
                    <p className="text-sm text-gray-600">Chicago, IL 60601</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdFlight className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Airport Access
                    </h3>
                    <p className="text-sm text-gray-600">O'Hare - 35 min</p>
                    <p className="text-sm text-gray-600">Midway - 25 min</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Contact
                    </h3>
                    <p className="text-sm text-gray-600">+1 (555) 876-5432</p>
                    <p className="text-sm text-gray-600">
                      reservations@example.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Check-in
                    </h3>
                    <p className="text-sm text-gray-600">3:00 PM - 11:00 PM</p>
                    <p className="text-sm text-gray-600">Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-teal-800 text-white font-medium rounded-full hover:bg-teal-900 transition-colors"
                >
                  View on Map
                </Motion.button>
                <Motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Book Now
                </Motion.button>
              </div>
            </Motion.div>

            {/* Right Map */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-[500px] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-teal-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <MdLocationOn />
                  <span className="font-medium text-sm">
                    Grand Luxury Hotel
                  </span>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Getting Here is Easy
            </h2>
            <p className="text-gray-600">
              Multiple convenient transportation options to reach our hotel
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* By Car */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdDirectionsCar className="w-6 h-6 text-teal-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    By Car
                  </h3>
                  <span className="inline-block bg-teal-700 text-white text-xs px-3 py-1 rounded-full">
                    Most Convenient
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complimentary valet service available. Premium parking garage
                with direct hotel access and EV charging stations.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  Valet Service
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  EV Charging
                </span>
              </div>
            </Motion.div>

            {/* By Metro */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdTrain className="w-6 h-6 text-teal-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    By Metro
                  </h3>
                  <span className="text-gray-600 text-sm">5 min walk</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                State Street Station directly connects to all major lines. Blue
                line to airports, Red line to suburbs and entertainment
                districts.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  Blue Line
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  Red Line
                </span>
              </div>
            </Motion.div>

            {/* Airport Shuttle */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdFlight className="w-6 h-6 text-teal-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Airport Shuttle
                  </h3>
                  <span className="text-gray-600 text-sm">Every 30 min</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Luxury shuttle service to both major airports. Premium comfort
                with WiFi, refreshments, and luggage assistance included.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  WiFi
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  Refreshments
                </span>
              </div>
            </Motion.div>

            {/* Ride Share */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdLocalTaxi className="w-6 h-6 text-teal-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Ride Share
                  </h3>
                  <span className="text-gray-600 text-sm">24/7 Available</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Dedicated pickup zones for all ride-sharing services.
                Professional concierge assistance for booking and special
                requests.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  Concierge Help
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  Express Pickup
                </span>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Explore Neighborhood Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Explore the Neighborhood
            </h2>
            <p className="text-gray-600">
              World-class attractions and entertainment right at your doorstep
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Millennium Park */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop"
                  alt="Millennium Park"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <MdLocationOn className="text-teal-700 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    2 blocks
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Millennium Park
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>8 minute walk</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Cras ultricies ligula sed magna dictum porta. Donec
                  sollicitudin molestie malesuada. Experience iconic Cloud Gate
                  sculpture.
                </p>
              </div>
            </Motion.div>

            {/* Art Institute */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=400&fit=crop"
                  alt="Art Institute"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <MdLocationOn className="text-teal-700 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    4 blocks
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Art Institute
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>12 minute walk</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas world-renowned collection.
                </p>
              </div>
            </Motion.div>

            {/* Navy Pier */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop"
                  alt="Navy Pier"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <MdLocationOn className="text-teal-700 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    1.2 miles
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Navy Pier
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>18 minute walk</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Vivamus magna justo lacinia eget consectetur sed convallis at
                  tellus. Entertainment, dining, and stunning lake views.
                </p>
              </div>
            </Motion.div>

            {/* Additional locations */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                  alt="Scenic location"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <MdLocationOn className="text-teal-700 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    3 blocks
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scenic Overlook
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>10 minute walk</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Beautiful panoramic views of the city skyline and lakefront.
                  Perfect spot for photography and relaxation.
                </p>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"
                  alt="Historic building"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <MdLocationOn className="text-teal-700 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    1 block
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Historic District
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>5 minute walk</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Explore architectural heritage and cultural landmarks. Rich
                  history combined with modern amenities and dining.
                </p>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop"
                  alt="Garden park"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <MdLocationOn className="text-teal-700 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    6 blocks
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Botanical Gardens
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>15 minute walk</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Tranquil gardens featuring diverse plant collections. Peaceful
                  retreat in the heart of downtown with seasonal displays.
                </p>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-teal-800 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-900 transition-colors"
      >
        <FiArrowUp className="w-5 h-5 text-white" />
      </Motion.button>
    </div>
  );
};

export default LocationPage;
