import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaUsers,
  FaWifi,
  FaTv,
  FaBriefcase,
  FaPhone,
  FaUtensils,
  FaGamepad,
  FaStar,
  FaChevronDown,
} from "react-icons/fa";

const Rooms = () => {
  const [priceRange, setPriceRange] = useState("all");
  const [guestCapacity, setGuestCapacity] = useState("all");
  const [viewType, setViewType] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const rooms = [
    {
      id: 1,
      image: "/classic-double.jpg",
      title: "Deluxe Ocean Suite",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      badges: ["Ocean View", "Popular"],
      amenities: [
        { icon: <FaUsers />, text: "Up to 4 guests" },
        { icon: <FaWifi />, text: "Free WiFi" },
        { icon: <FaTv />, text: "Smart TV" },
      ],
      price: 289,
      capacity: 4,
      view: "ocean",
    },
    {
      id: 2,
      image: "/business-room.jpg",
      title: "Executive Business Suite",
      rating: 4.5,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      badges: ["Business"],
      amenities: [
        { icon: <FaUsers />, text: "Up to 2 guests" },
        { icon: <FaBriefcase />, text: "Work Desk" },
        { icon: <FaPhone />, text: "Business Phone" },
      ],
      price: 199,
      capacity: 2,
      view: "city",
    },
    {
      id: 3,
      image: "/family-suite.jpg",
      title: "Family Garden Room",
      rating: 4,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      badges: ["Family Friendly", "Garden View"],
      amenities: [
        { icon: <FaUsers />, text: "Up to 5 guests" },
        { icon: <FaUtensils />, text: "Mini Kitchen" },
        { icon: <FaGamepad />, text: "Game Console" },
      ],
      price: 159,
      capacity: 5,
      view: "garden",
    },
  ];

  const filteredRooms = rooms.filter((room) => {
    if (priceRange !== "all") {
      if (priceRange === "low" && room.price > 150) return false;
      if (priceRange === "medium" && (room.price < 150 || room.price > 250))
        return false;
      if (priceRange === "high" && room.price < 250) return false;
    }
    if (guestCapacity !== "all") {
      const capacity = parseInt(guestCapacity);
      if (room.capacity < capacity) return false;
    }
    if (viewType !== "all" && room.view !== viewType) return false;
    return true;
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // popularity (default order)
  });

  const getBadgeColor = (badge) => {
    if (badge === "Ocean View") return "bg-blue-500";
    if (badge === "Popular") return "bg-orange-500";
    if (badge === "Business") return "bg-gray-700";
    if (badge === "Family Friendly") return "bg-green-500";
    if (badge === "Garden View") return "bg-emerald-500";
    return "bg-gray-500";
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-400 opacity-50" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-200 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Rooms</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <span>/</span>
            <span className="text-gray-900">Rooms</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-8 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Price Range
              </label>
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under $150</option>
                  <option value="medium">$150 - $250</option>
                  <option value="high">Over $250</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Guest Capacity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Guest Capacity
              </label>
              <div className="relative">
                <select
                  value={guestCapacity}
                  onChange={(e) => setGuestCapacity(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
                >
                  <option value="all">Any Capacity</option>
                  <option value="2">2+ Guests</option>
                  <option value="4">4+ Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* View Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                View Type
              </label>
              <div className="relative">
                <select
                  value={viewType}
                  onChange={(e) => setViewType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
                >
                  <option value="all">All Views</option>
                  <option value="ocean">Ocean View</option>
                  <option value="city">City View</option>
                  <option value="garden">Garden View</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRooms.map((room, index) => (
              <Motion.div
                key={room.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Image */}
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {room.badges.map((badge, idx) => (
                      <Motion.span
                        key={idx}
                        className={`${getBadgeColor(
                          badge
                        )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                      >
                        {badge}
                      </Motion.span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">
                      {room.title}
                    </h3>
                    <div className="flex gap-0.5 ml-2">
                      {renderStars(room.rating)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                    {room.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="text-gray-500">{amenity.icon}</span>
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-gray-500">From</span>
                      <span className="text-3xl font-bold text-gray-900">
                        ${room.price}
                      </span>
                      <span className="text-sm text-gray-500">/ night</span>
                    </div>
                    <Motion.button
                      className="bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "#0f5e54" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </Motion.button>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No rooms found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setPriceRange("all");
                  setGuestCapacity("all");
                  setViewType("all");
                  setSortBy("popularity");
                }}
                className="mt-4 text-teal-700 font-semibold hover:text-teal-600"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
