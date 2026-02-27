import suiteImage from "../assets/img1.webp";
import deluxeImage from "../assets/img2.webp";
import loftImage from "../assets/img3.webp";

export const rooms = [
  {
    id: "aurora-suite",
    name: "Aurora Suite",
    description: "Top-floor suite with private lounge and skyline terrace.",
    price: 420,
    image: suiteImage,
    size: "62 m²",
    capacity: 3,
  },
  {
    id: "serene-deluxe",
    name: "Serene Deluxe",
    description: "Warm contemporary room with a quiet courtyard outlook.",
    price: 285,
    image: deluxeImage,
    size: "38 m²",
    capacity: 2,
  },
  {
    id: "atelier-loft",
    name: "Atelier Loft",
    description: "Loft-style stay with premium desk setup and layered lighting.",
    price: 330,
    image: loftImage,
    size: "44 m²",
    capacity: 2,
  },
];
