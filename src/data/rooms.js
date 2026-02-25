import suiteImage from "../assets/img1.webp";
import terraceImage from "../assets/img2.webp";
import loungeImage from "../assets/img3.webp";
import galleryEight from "../assets/Gallery8.webp";
import galleryNine from "../assets/Gallery9.webp";
import galleryTen from "../assets/Gallery10.webp";

export const rooms = [
  {
    id: "r-aurora-suite",
    name: "Aurora Suite",
    slug: "aurora-suite",
    shortDescription: "Top-floor suite with skyline terrace and private lounge.",
    description:
      "A calm, expansive suite designed for business and leisure stays. Includes a separate lounge, curated minibar, and panoramic city views.",
    images: [suiteImage, galleryEight],
    price: 420,
    rating: 4.9,
    capacity: 3,
    size: "62 m²",
    amenities: ["King Bed", "Rain Shower", "Private Lounge", "City View"],
    featured: true,
  },
  {
    id: "r-serene-deluxe",
    name: "Serene Deluxe",
    slug: "serene-deluxe",
    shortDescription: "Warm contemporary room with a quiet courtyard outlook.",
    description:
      "Designed with soft natural finishes and acoustic comfort, the Serene Deluxe is ideal for restorative short and medium stays.",
    images: [terraceImage, galleryNine],
    price: 285,
    rating: 4.7,
    capacity: 2,
    size: "38 m²",
    amenities: ["Queen Bed", "Workspace", "Smart TV", "Courtyard View"],
    featured: true,
  },
  {
    id: "r-atelier-loft",
    name: "Atelier Loft",
    slug: "atelier-loft",
    shortDescription: "Loft-style room with premium work setup and lounge chair.",
    description:
      "A modern loft room balancing productivity and comfort, with layered lighting and a dedicated ergonomic workspace.",
    images: [loungeImage, galleryTen],
    price: 310,
    rating: 4.8,
    capacity: 2,
    size: "44 m²",
    amenities: ["King Bed", "Ergonomic Desk", "Nespresso", "Fast Wi-Fi"],
    featured: true,
  },
  {
    id: "r-harbor-premier",
    name: "Harbor Premier",
    slug: "harbor-premier",
    shortDescription: "Spacious corner room with dual-aspect natural light.",
    description:
      "A premium corner category with additional seating and elevated finishes, ideal for guests seeking more living space.",
    images: [galleryNine, suiteImage],
    price: 360,
    rating: 4.8,
    capacity: 3,
    size: "52 m²",
    amenities: ["King Bed", "Corner View", "Walk-in Wardrobe", "Soaking Tub"],
    featured: false,
  },
  {
    id: "r-garden-reserve",
    name: "Garden Reserve",
    slug: "garden-reserve",
    shortDescription: "Ground-level room with private green patio.",
    description:
      "A tranquil room opening to a small private patio. Recommended for guests who prefer direct outdoor access and privacy.",
    images: [galleryEight, terraceImage],
    price: 330,
    rating: 4.6,
    capacity: 2,
    size: "41 m²",
    amenities: ["Queen Bed", "Private Patio", "Marshall Speaker", "Bathrobes"],
    featured: false,
  },
  {
    id: "r-family-signature",
    name: "Family Signature",
    slug: "family-signature",
    shortDescription: "Flexible two-zone suite for family trips.",
    description:
      "A two-zone layout with smart storage and flexible sleeping options to keep family travel comfortable and organized.",
    images: [galleryTen, loungeImage],
    price: 470,
    rating: 4.9,
    capacity: 5,
    size: "74 m²",
    amenities: ["Two-Zone Layout", "Sofa Bed", "Pantry", "Family Concierge"],
    featured: false,
  },
];

export const getRoomBySlug = (slug) => rooms.find((room) => room.slug === slug);

export const featuredRooms = rooms.filter((room) => room.featured);
