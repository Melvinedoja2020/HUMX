import suiteImage from "../assets/img1.webp";
import deluxeImage from "../assets/img2.webp";
import regularImage from "../assets/img3.webp";

export const rooms = [
  {
    id: "regular-room",
    category: "Regular",
    name: "Regular Room",
    beds: "1 Queen Bed",
    guests: "2 Guests",
    capacity: 2,
    size: "34 m²",
    price: 620000,
    description: "A calm essential room with elegant finishes for short or business stays.",
    longDescription:
      "The Regular Room offers understated comfort with premium bedding, a quiet work corner, and warm interior textures. Ideal for guests who want a clean, restful, and efficient luxury experience.",
    image: regularImage,
    bannerImg: regularImage,
    detailImg: regularImage,
    thumbImg: regularImage,
  },
  {
    id: "deluxe-room",
    category: "Deluxe",
    name: "Deluxe Room",
    beds: "1 King Bed",
    guests: "2 Guests",
    capacity: 2,
    size: "46 m²",
    price: 980000,
    description: "A refined room category with added space, richer materials, and elevated comfort.",
    longDescription:
      "The Deluxe Room balances modern sophistication with relaxed ambience. Guests enjoy expanded floor area, layered lighting, and premium bath amenities, creating an effortless city-luxury stay.",
    image: deluxeImage,
    bannerImg: deluxeImage,
    detailImg: deluxeImage,
    thumbImg: deluxeImage,
  },
  {
    id: "signature-suite",
    category: "Suite",
    name: "Signature Suite",
    beds: "1 King Bed",
    guests: "3 Guests",
    capacity: 3,
    size: "64 m²",
    price: 1680000,
    description: "A spacious suite with lounge seating and a crafted setting for deeper rest.",
    longDescription:
      "Our Signature Suite features a dedicated lounge area, larger wardrobe space, and finely curated furnishings. It is tailored for guests who value privacy, room to unwind, and polished hospitality.",
    image: suiteImage,
    bannerImg: suiteImage,
    detailImg: suiteImage,
    thumbImg: suiteImage,
  },
  {
    id: "presidential-suite",
    category: "Presidential",
    name: "Presidential Suite",
    beds: "2 King Beds",
    guests: "4 Guests",
    capacity: 4,
    size: "78 m²",
    price: 2490000,
    description: "Our premier suite class with expansive living areas and discreet top-tier service.",
    longDescription:
      "The Presidential Suite offers a private, high-luxury environment with expansive entertaining zones, bespoke finishes, and concierge-level detail. Built for guests who expect a flagship hospitality experience.",
    image: suiteImage,
    bannerImg: suiteImage,
    detailImg: suiteImage,
    thumbImg: suiteImage,
  },
];

export function formatNaira(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}
