const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const TAX_RATE = 0.12;
export const SERVICE_FEE = 28;
export const BREAKFAST_PRICE = 28;
export const AIRPORT_PICKUP_PRICE = 55;

export const formatMoney = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export const countNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;

  const start = new Date(checkIn);
  const end = new Date(checkOut);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;

  const diffDays = Math.ceil((end - start) / MS_PER_DAY);
  return Math.max(diffDays, 0);
};

export const buildPricing = ({
  checkIn,
  checkOut,
  roomPrice = 0,
  addOns = { breakfast: false, airportPickup: false },
}) => {
  const nights = countNights(checkIn, checkOut);
  const roomSubtotal = nights * roomPrice;
  const addOnSubtotal =
    (addOns.breakfast ? BREAKFAST_PRICE * nights : 0) +
    (addOns.airportPickup ? AIRPORT_PICKUP_PRICE : 0);
  const taxesAndFees = Math.round((roomSubtotal + addOnSubtotal) * TAX_RATE + SERVICE_FEE);
  const total = roomSubtotal + addOnSubtotal + taxesAndFees;

  return {
    nights,
    roomSubtotal,
    addOnSubtotal,
    taxesAndFees,
    total,
  };
};

export const buildBookingReference = () => {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.floor(Math.random() * 900 + 100).toString();
  return `HX-${stamp}-${random}`;
};
