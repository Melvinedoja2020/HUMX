import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { rooms } from "../data/rooms";

const STORAGE_KEY = "lodr_bookings";

const defaultForm = {
  name: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: 2,
  roomId: rooms[0]?.id ?? "",
};

const BookingContext = createContext(null);

function makeReference() {
  return `LDR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 1;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const dayMs = 1000 * 60 * 60 * 24;
  const diff = Math.ceil((end.getTime() - start.getTime()) / dayMs);
  return Number.isFinite(diff) && diff > 0 ? diff : 1;
}

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [bookings, setBookings] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setBookings(parsed);
      }
    } catch {
      setBookings([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const summary = useMemo(() => {
    const room = rooms.find((item) => item.id === form.roomId) ?? rooms[0];
    const nights = nightsBetween(form.checkIn, form.checkOut);
    const roomRate = room?.price ?? 0;
    const roomTotal = roomRate * nights;
    const serviceFee = 65;
    const taxes = Math.round(roomTotal * 0.12);
    const total = roomTotal + serviceFee + taxes;

    return { nights, roomRate, roomTotal, serviceFee, taxes, total };
  }, [form.checkIn, form.checkOut, form.roomId]);

  const openBooking = (prefill = {}) => {
    setForm((current) => ({ ...current, ...prefill }));
    setConfirmation(null);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  const clearConfirmation = () => {
    setConfirmation(null);
  };

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitBooking = () => {
    const record = {
      ...form,
      reference: makeReference(),
      total: summary.total,
      createdAt: new Date().toISOString(),
    };

    setBookings((current) => [record, ...current]);
    setConfirmation(record);
    return record;
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        form,
        bookings,
        confirmation,
        openBooking,
        closeBooking,
        updateField,
        submitBooking,
        clearConfirmation,
        summary,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}
