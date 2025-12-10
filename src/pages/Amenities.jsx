import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaClock,
  FaFire,
  FaGlassMartini,
  FaCalendarCheck,
  FaHeart,
  FaSpa,
  FaWifi,
  FaCar,
  FaPlane,
  FaHeadset,
  FaBell,
  FaShieldAlt,
  FaLanguage,
  FaPaw,
  FaArrowUp,
} from "react-icons/fa";

const AmenitiesPage = () => {
  const featuredAmenities = [
    {
      image: "/pool.jpg",
      title: "Infinity Pool & Sun Deck",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      features: [
        { icon: <FaClock />, text: "Open 6 AM - 10 PM" },
        { icon: <FaFire />, text: "Heated pool year-round" },
        { icon: <FaGlassMartini />, text: "Poolside bar service" },
      ],
    },
    {
      image: "/spa-wellness.jpg",
      title: "Luxury Spa & Wellness",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      features: [
        { icon: <FaCalendarCheck />, text: "Book treatments online" },
        { icon: <FaHeart />, text: "Couples massage rooms" },
        { icon: <FaSpa />, text: "Organic spa products" },
      ],
    },
    {
      image: "/dining.jpg",
      title: "Fine Dining Restaurant",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.",
      features: [
        { icon: <FaClock />, text: "Open 7 AM - 11 PM" },
        { icon: <FaGlassMartini />, text: "Premium wine selection" },
        { icon: <FaBell />, text: "Private dining available" },
      ],
    },
    {
      image: "/fitness.jpg",
      title: "Modern Fitness Center",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
      features: [
        { icon: <FaClock />, text: "24/7 Access" },
        { icon: <FaHeart />, text: "Personal training" },
        { icon: <FaSpa />, text: "Yoga & meditation" },
      ],
    },
  ];

  const hotelServices = [
    {
      icon: <FaWifi />,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the property",
    },
    {
      icon: <FaCar />,
      title: "Valet Parking",
      description: "Complimentary valet service for all guests",
    },
    {
      icon: <FaPlane />,
      title: "Airport Shuttle",
      description: "Scheduled transfers to major airports",
    },
    {
      icon: <FaHeadset />,
      title: "Concierge",
      description: "24/7 assistance for reservations and tours",
    },
    {
      icon: <FaBell />,
      title: "Room Service",
      description: "Gourmet dining delivered to your room",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Deposit",
      description: "Secure storage for your valuables",
    },
    {
      icon: <FaLanguage />,
      title: "Multilingual Staff",
      description: "Service in English, Spanish, French, and more",
    },
    {
      icon: <FaPaw />,
      title: "Pet Friendly",
      description: "Welcome amenities for your furry friends",
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Featured Amenities Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {featuredAmenities.slice(0, 2).map((amenity, index) => (
              <Motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="relative h-64">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {amenity.description}
                  </p>
                  <div className="space-y-3">
                    {amenity.features.map((feature, idx) => (
                      <Motion.div
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <span className="text-teal-700 text-lg">
                          {feature.icon}
                        </span>
                        <span className="text-sm">{feature.text}</span>
                      </Motion.div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredAmenities.slice(2, 4).map((amenity, index) => (
              <Motion.div
                key={index + 2}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="relative h-64">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {amenity.description}
                  </p>
                  <div className="space-y-3">
                    {amenity.features.map((feature, idx) => (
                      <Motion.div
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <span className="text-teal-700 text-lg">
                          {feature.icon}
                        </span>
                        <span className="text-sm">{feature.text}</span>
                      </Motion.div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Hotel Services Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Hotel Services
            </h2>
          </Motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelServices.map((service, index) => (
              <Motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Motion.div
                  className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </Motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Motion.button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#0f5e54" }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="text-xl" />
      </Motion.button>
    </div>
  );
};

export default AmenitiesPage;
