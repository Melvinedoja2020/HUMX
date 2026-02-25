import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { rooms } from "../data/rooms";
import { buildBookingReference, buildPricing } from "../lib/booking";

const BOOKING_STORAGE_KEY = "humx.bookings";

export interface BookingDraft {
  hotel: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomSlug: string;
  addOns: {
    breakfast: boolean;
    airportPickup: boolean;
  };
}

export interface BookingEntry {
  id: string;
  reference: string;
  createdAt: string;
  hotel: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
  };
  roomSlug: string;
  roomName: string;
  addOns: {
    breakfast: boolean;
    airportPickup: boolean;
  };
  pricing: {
    nightlyRate: number;
    numberOfNights: number;
    subtotal: number;
    breakfast: number;
    airportPickup: number;
    total: number;
  };
}

export interface BookingContextType {
  isDrawerOpen: boolean;
  draft: BookingDraft;
  selectedRoom: any;
  pricing: any;
  bookings: BookingEntry[];
  lastBooking: BookingEntry | null;
  openDrawer: (prefill?: Partial<BookingDraft>) => void;
  closeDrawer: () => void;
  updateDraft: (updates: Partial<BookingDraft>) => void;
  submitBooking: () => BookingEntry;
  setDraft: (draft: BookingDraft) => void;
}

const defaultRoom = rooms[0];

const buildDefaultDraft = (): BookingDraft => ({
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

const BookingContext = createContext<BookingContextType | null>(null);

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [draft, setDraft] = useState<BookingDraft>(buildDefaultDraft());
  const [bookings, setBookings] = useState<BookingEntry[]>([]);
  const [lastBooking, setLastBooking] = useState<BookingEntry | null>(null);

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
    [draft.roomSlug],
  );

  const pricing = useMemo(
    () =>
      buildPricing({
        checkIn: draft.checkIn,
        checkOut: draft.checkOut,
        roomPrice: selectedRoom?.price ?? 0,
        addOns: draft.addOns,
      }),
    [draft.addOns, draft.checkIn, draft.checkOut, selectedRoom],
  );

  const openDrawer = useCallback((prefill: Partial<BookingDraft> = {}) => {
    setDraft((current) => ({
      ...current,
      ...prefill,
      addOns: {
        ...current.addOns,
        ...(prefill.addOns ?? {}),
      },
    }));
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const updateDraft = useCallback((updates: Partial<BookingDraft>) => {
    setDraft((current) => ({
      ...current,
      ...updates,
      addOns: {
        ...current.addOns,
        ...(updates.addOns ?? {}),
      },
    }));
  }, []);

  const submitBooking = useCallback((): BookingEntry => {
    const reference = buildBookingReference();

    const entry: BookingEntry = {
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

  const value: BookingContextType = useMemo(
    () => ({
      isDrawerOpen,
      draft,
      selectedRoom,
      pricing,
      bookings,
      lastBooking,
      openDrawer,
      closeDrawer,
      updateDraft,
      submitBooking,
      setDraft,
    }),
    [
      bookings,
      closeDrawer,
      draft,
      isDrawerOpen,
      lastBooking,
      openDrawer,
      pricing,
      selectedRoom,
      submitBooking,
      updateDraft,
    ],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return context;
};
