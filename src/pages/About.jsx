import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaSpa,
  FaUtensils,
  FaMountain,
  FaStar,
  FaUsers,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaWifi,
  FaTv,
  FaCoffee,
  FaSnowflake,
  FaBriefcase,
  FaCity,
  FaTree,
  FaHome,
  FaGamepad,
  FaPhone,
  FaBell,
  FaWater,
  FaGem,
  FaBolt,
  FaPlay,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

const AboutPage = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const timelineItems = [
    {
      year: "1923",
      title: "Grand Opening",
      description: "Founded as exclusive mountain retreat",
    },
    {
      year: "1987",
      title: "Major Renovation",
      description: "Modern amenities while preserving heritage",
    },
    {
      year: "2019",
      title: "Spa & Wellness",
      description: "Award-winning wellness center addition",
    },
  ];

  const amenities = [
    {
      image: "/spa.jpg",
      icon: <FaSpa />,
      title: "World-Class Spa",
      description:
        "Rejuvenating treatments in our award-winning wellness sanctuary",
    },
    {
      image: "/dining.jpg",
      icon: <FaUtensils />,
      title: "Gourmet Dining",
      description:
        "Michelin-starred cuisine crafted by renowned executive chefs",
    },
    {
      image: "/location.jpg",
      icon: <FaMountain />,
      title: "Prime Location",
      description:
        "Nestled in the heart of the city with breathtaking panoramic views",
    },
  ];

  const stats = [
    { number: "236", label: "Luxury Suites" },
    { number: "96%", label: "Satisfaction Rate" },
    { number: "15", label: "International Awards" },
    { number: "100", label: "Years of Excellence" },
  ];

  const featuredRoom = {
    image: "/presidential-suite.jpg",
    badge: "PRESIDENTIAL",
    title: "Grand Presidential Suite",
    rating: 5.0,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    features: [
      { icon: <FaUsers />, text: "6 Guests" },
      { icon: <FaRulerCombined />, text: "180m²" },
      { icon: <FaMapMarkerAlt />, text: "Top Floor" },
    ],
    amenities: [
      { icon: <FaWifi />, text: "Premium WiFi" },
      { icon: <FaTv />, text: "Smart TV" },
      { icon: <FaCoffee />, text: "Coffee Bar" },
      { icon: <FaSnowflake />, text: "Climate Control" },
    ],
    price: 649,
  };

  const sidebarRooms = [
    {
      image: "/business-room.jpg",
      title: "Executive Business Room",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      features: [
        { icon: <FaBriefcase />, text: "Work Space" },
        { icon: <FaCity />, text: "City Views" },
      ],
      price: 329,
    },
    {
      image: "/garden-deluxe.jpg",
      title: "Garden View Deluxe",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
      features: [
        { icon: <FaTree />, text: "Garden View" },
        { icon: <FaHome />, text: "Private Terrace" },
      ],
      price: 269,
    },
    {
      image: "/family-suite.jpg",
      title: "Family Comfort Suite",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
      features: [
        { icon: <FaUsers />, text: "Family Space" },
        { icon: <FaGamepad />, text: "Kids Area" },
      ],
      price: 419,
    },
  ];

  const roomCards = [
    {
      image: "/classic-double.jpg",
      title: "Classic Double",
      price: 189,
      amenities: [<FaWifi />, <FaTv />, <FaPhone />],
    },
    {
      image: "/superior-king.jpg",
      title: "Superior King",
      price: 249,
      amenities: [<FaWifi />, <FaCoffee />, <FaSnowflake />],
    },
    {
      image: "/premium-ocean.jpg",
      title: "Premium Ocean View",
      price: 359,
      amenities: [<FaWater />, <FaHome />, <FaBell />],
    },
    {
      image: "/luxury-penthouse.jpg",
      title: "Luxury Penthouse",
      price: 1199,
      amenities: [<FaStar />, <FaHome />, <FaGem />],
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Images */}
            <Motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Main Hotel Image */}
                <Motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/hotel-exterior.jpg"
                    alt="Hotel Exterior"
                    className="w-full h-auto"
                  />

                  {/* 5-Star Badge */}
                  <Motion.div
                    className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 text-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaStar className="text-2xl text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">
                      5-Star Excellence
                    </h4>
                    <p className="text-xs text-gray-600">
                      Rated #1 Luxury Resort
                    </p>
                  </Motion.div>
                </Motion.div>

                {/* Interior Room Image */}
                <Motion.div
                  className="absolute -bottom-8 -left-8 w-64 rounded-xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/room-interior.jpg"
                    alt="Room Interior"
                    className="w-full h-auto"
                  />
                </Motion.div>
              </div>
            </Motion.div>

            {/* Right - Content */}
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Where Timeless Elegance Meets Modern Luxury
              </Motion.h1>

              <Motion.p
                className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium.
              </Motion.p>

              <Motion.p
                className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Motion.p>

              {/* Timeline */}
              <div className="space-y-6 mb-10">
                {timelineItems.map((item, index) => (
                  <Motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <Motion.div
                      className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.year}
                    </Motion.div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </Motion.div>
                ))}
              </div>

              {/* Buttons */}
              <Motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Motion.button
                  className="bg-teal-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "#0f5e54" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBolt className="text-lg" />
                  Explore Our Heritage
                </Motion.button>

                <Motion.button
                  className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold flex items-center gap-2 border-2 border-gray-300 shadow-lg"
                  whileHover={{ scale: 1.05, borderColor: "#0f766e" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="text-lg" />
                  Watch Story
                </Motion.button>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Exceptional Hospitality Redefined
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the amenities and services that make your stay
              unforgettable
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {amenities.map((amenity, index) => (
              <Motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Motion.div
                  className="relative rounded-2xl overflow-hidden mb-6 h-64"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center text-white text-2xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  >
                    {amenity.icon}
                  </Motion.div>
                </Motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </Motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <Motion.div
            className="bg-gray-50 rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Motion.h3
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </Motion.h3>
                  <p className="text-gray-800 font-semibold text-sm md:text-base">
                    {stat.label}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Featured Room Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Room */}
            <Motion.div
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-80">
                <img
                  src={featuredRoom.image}
                  alt={featuredRoom.title}
                  className="w-full h-full object-cover"
                />
                <Motion.span
                  className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-xs font-bold text-gray-800"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  {featuredRoom.badge}
                </Motion.span>

                {/* Feature Badges */}
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {featuredRoom.features.map((feature, index) => (
                    <Motion.div
                      key={index}
                      className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-gray-600">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </Motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {featuredRoom.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Motion.span
                          key={i}
                          className="text-yellow-400 text-lg"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        >
                          <FaStar />
                        </Motion.span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-600">
                      {featuredRoom.rating} Excellence
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredRoom.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {featuredRoom.amenities.map((amenity, index) => (
                    <Motion.div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-lg text-gray-700">
                        {amenity.icon}
                      </span>
                      <span>{amenity.text}</span>
                    </Motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${featuredRoom.price}
                    </span>
                    <span className="text-gray-600">per night</span>
                  </div>
                  <Motion.button
                    className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#0f5e54" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reserve Suite
                  </Motion.button>
                </div>
              </div>
            </Motion.div>

            {/* Sidebar Rooms */}
            <div className="space-y-6">
              {sidebarRooms.map((room, index) => (
                <Motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex gap-4 p-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {room.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {room.description}
                      </p>
                      <div className="flex gap-3 text-xs text-gray-600 mb-3">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <span className="text-gray-700">
                              {feature.icon}
                            </span>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-gray-900">
                            ${room.price}
                          </span>
                          <span className="text-xs text-gray-600">/night</span>
                        </div>
                        <Motion.button
                          className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md text-sm font-semibold"
                          whileHover={{
                            backgroundColor: "#0f766e",
                            color: "#ffffff",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book
                        </Motion.button>
                      </div>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Cards Grid Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {roomCards.map((room, index) => (
              <Motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="relative h-48">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {room.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${room.price}
                    </span>
                    <span className="text-sm text-gray-600">/night</span>
                  </div>
                  <div className="flex gap-3 text-gray-600">
                    {room.amenities.map((amenity, idx) => (
                      <Motion.span
                        key={idx}
                        className="text-lg"
                        whileHover={{ scale: 1.3 }}
                      >
                        {amenity}
                      </Motion.span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>

          <Motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Motion.a
              href="#"
              className="inline-flex items-center gap-2 text-gray-800 font-semibold text-lg hover:text-teal-700 transition-colors"
              whileHover={{ x: 10 }}
            >
              Explore All Accommodations
              <FaArrowRight />
            </Motion.a>
          </Motion.div>
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

export default AboutPage;
