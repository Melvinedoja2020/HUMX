import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { rooms } from "../data/rooms";
import { buildBookingReference, buildPricing } from "../lib/booking";

const BOOKING_STORAGE_KEY = "humx.bookings";

const defaultRoom = rooms[0];

const buildDefaultDraft = () => ({
  hotel: "Grandoria Hotel",
  checkIn: "",
  checkOut: "",
  adults: 2,
  children: 0,
  roomSlug: defaultRoom?.slug ?? "",
  addOns: {
    breakfast: true,
    airportPickup: false,
  },
});

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [draft, setDraft] = useState(buildDefaultDraft());
  const [bookings, setBookings] = useState([]);
  const [lastBooking, setLastBooking] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(BOOKING_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setBookings(parsed);
        setLastBooking(parsed[0] ?? null);
      }
    } catch {
      // Ignore malformed local storage and continue with empty state.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.slug === draft.roomSlug) ?? defaultRoom,
    [draft.roomSlug]
  );

  const pricing = useMemo(
    () =>
      buildPricing({
        checkIn: draft.checkIn,
        checkOut: draft.checkOut,
        roomPrice: selectedRoom?.price ?? 0,
        addOns: draft.addOns,
      }),
    [draft.addOns, draft.checkIn, draft.checkOut, selectedRoom]
  );

  const openBooking = useCallback((prefill = {}, openDrawer = true) => {
    setDraft((current) => ({
      ...current,
      ...prefill,
      addOns: {
        ...current.addOns,
        ...(prefill.addOns ?? {}),
      },
    }));

    if (openDrawer) {
      setBookingOpen(true);
    }
  }, []);

  const closeBooking = useCallback(() => setBookingOpen(false), []);

  const updateDraft = useCallback((updates) => {
    setDraft((current) => ({
      ...current,
      ...updates,
      addOns: {
        ...current.addOns,
        ...(updates.addOns ?? {}),
      },
    }));
  }, []);

  const submitBooking = useCallback(() => {
    const reference = buildBookingReference();

    const entry = {
      id: reference,
      reference,
      createdAt: new Date().toISOString(),
      hotel: draft.hotel,
      checkIn: draft.checkIn,
      checkOut: draft.checkOut,
      guests: {
        adults: draft.adults,
        children: draft.children,
      },
      roomSlug: selectedRoom.slug,
      roomName: selectedRoom.name,
      addOns: draft.addOns,
      pricing,
    };

    setBookings((current) => [entry, ...current].slice(0, 12));
    setLastBooking(entry);
    return entry;
  }, [draft, pricing, selectedRoom]);

  const value = useMemo(
    () => ({
      isBookingOpen,
      draft,
      selectedRoom,
      pricing,
      bookings,
      lastBooking,
      openBooking,
      closeBooking,
      updateDraft,
      submitBooking,
      setDraft,
    }),
    [
      bookings,
      closeBooking,
      draft,
      isBookingOpen,
      lastBooking,
      openBooking,
      pricing,
      selectedRoom,
      submitBooking,
      updateDraft,
    ]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return context;
};
