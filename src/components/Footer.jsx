import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    usefulLinks: [
      { text: "Home", href: "#" },
      { text: "About us", href: "#" },
      { text: "Services", href: "#" },
      { text: "Terms of service", href: "#" },
      { text: "Privacy policy", href: "#" },
    ],
    ourServices: [
      { text: "Web Design", href: "#" },
      { text: "Web Development", href: "#" },
      { text: "Product Management", href: "#" },
      { text: "Marketing", href: "#" },
      { text: "Graphic Design", href: "#" },
    ],
    hicSolutasetp: [
      { text: "Molestiae accusamus iure", href: "#" },
      { text: "Excepturi dignissimos", href: "#" },
      { text: "Suscipit distinctio", href: "#" },
      { text: "Dilecta", href: "#" },
      { text: "Sit quas consectetur", href: "#" },
    ],
    nobisIllum: [
      { text: "Ipsam", href: "#" },
      { text: "Laudantium dolorum", href: "#" },
      { text: "Dinera", href: "#" },
      { text: "Trodelas", href: "#" },
      { text: "Flexo", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-teal-800 text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Grandoria</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="pt-3">
                <span className="font-semibold text-white">Phone:</span> +1 5589
                55488 55
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@example.com
              </p>
            </div>
          </Motion.div>

          {/* Useful Links */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {footerLinks.usefulLinks.map((link, index) => (
                <Motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Our Services */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.ourServices.map((link, index) => (
                <Motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Hic solutasetp */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Hic solutasetp</h4>
            <ul className="space-y-3">
              {footerLinks.hicSolutasetp.map((link, index) => (
                <Motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Nobis illum */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Nobis illum</h4>
            <ul className="space-y-3">
              {footerLinks.nobisIllum.map((link, index) => (
                <Motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>
        </div>

        {/* Bottom Bar */}
        <Motion.div
          className="border-t border-teal-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-sm text-gray-300 text-center md:text-left">
            <span>© Copyright </span>
            <span className="font-semibold text-white">HUMX</span>
            <span>. All Rights Reserved</span>
            <br className="sm:hidden" />
            <span className="block sm:inline sm:ml-1">Designed by</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-teal-700 rounded-md flex items-center justify-center hover:bg-teal-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.05, type: "spring" }}
                >
                  <IconComponent className="text-lg" />
                </Motion.a>
              );
            })}
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
