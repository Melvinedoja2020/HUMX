import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Motion.nav
      className="bg-teal-700 px-4 sm:px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Motion.h1
            className="text-white text-xl sm:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Grandoria
          </Motion.h1>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Motion.a
              href="#"
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Home
            </Motion.a>

            <Motion.a
              href="/about"
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              About
            </Motion.a>

            <Motion.a
              href="/rooms"
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Rooms
            </Motion.a>

            <Motion.a
              href="/amenities"
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Amenities
            </Motion.a>

            <Motion.a
              href="/location"
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Location
            </Motion.a>

            {/* Pages Dropdown */}
            <div className="relative">
              <Motion.button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="text-white text-sm font-medium hover:text-teal-200 transition-colors flex items-center gap-1"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Pages
                <Motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isPagesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </Motion.svg>
              </Motion.button>

              <AnimatePresence>
                {isPagesOpen && (
                  <Motion.div
                    className="absolute top-full mt-2 right-0 bg-white rounded-md shadow-lg py-2 min-w-[150px] z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 transition-colors"
                    >
                      Page 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 transition-colors"
                    >
                      Page 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 transition-colors"
                    >
                      Page 3
                    </a>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            <Motion.a
              href="contact"
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact
            </Motion.a>

            {/* Language Dropdown */}
            <div className="relative">
              <Motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="text-white text-sm font-medium hover:text-teal-200 transition-colors flex items-center gap-2"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                English
                <Motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </Motion.svg>
              </Motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <Motion.div
                    className="absolute top-full mt-2 right-0 bg-white rounded-md shadow-lg py-2 min-w-[150px] z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 transition-colors">
                      English
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 transition-colors">
                      Spanish
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 transition-colors">
                      French
                    </button>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <Motion.div
              className="lg:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                <Motion.a
                  href="#"
                  className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Home
                </Motion.a>

                <Motion.a
                  href="#"
                  className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  About
                </Motion.a>

                <Motion.a
                  href="#"
                  className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Rooms
                </Motion.a>

                <Motion.a
                  href="#"
                  className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  Amenities
                </Motion.a>

                <Motion.a
                  href="#"
                  className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Location
                </Motion.a>

                {/* Mobile Pages Accordion */}
                <Motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <button
                    onClick={() => setIsPagesOpen(!isPagesOpen)}
                    className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2 flex items-center justify-between w-full"
                  >
                    Pages
                    <Motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isPagesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </Motion.svg>
                  </button>

                  <AnimatePresence>
                    {isPagesOpen && (
                      <Motion.div
                        className="pl-4 mt-2 flex flex-col gap-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href="#"
                          className="text-white text-sm hover:text-teal-200 transition-colors py-1"
                        >
                          Page 1
                        </a>
                        <a
                          href="#"
                          className="text-white text-sm hover:text-teal-200 transition-colors py-1"
                        >
                          Page 2
                        </a>
                        <a
                          href="#"
                          className="text-white text-sm hover:text-teal-200 transition-colors py-1"
                        >
                          Page 3
                        </a>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.div>

                <Motion.a
                  href="#"
                  className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Contact
                </Motion.a>

                {/* Mobile Language Selector */}
                <Motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="text-white text-sm font-medium hover:text-teal-200 transition-colors py-2 flex items-center justify-between w-full"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                      English
                    </span>
                    <Motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </Motion.svg>
                  </button>

                  <AnimatePresence>
                    {isLanguageOpen && (
                      <Motion.div
                        className="pl-4 mt-2 flex flex-col gap-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button className="text-white text-sm hover:text-teal-200 transition-colors py-1 text-left">
                          English
                        </button>
                        <button className="text-white text-sm hover:text-teal-200 transition-colors py-1 text-left">
                          Spanish
                        </button>
                        <button className="text-white text-sm hover:text-teal-200 transition-colors py-1 text-left">
                          French
                        </button>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
