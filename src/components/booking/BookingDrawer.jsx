import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useBooking } from "../../context/BookingContext";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { BookingForm } from "./BookingForm";

const focusableSelector =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const BookingDrawer = () => {
  const reducedMotion = usePrefersReducedMotion();
  const { isBookingOpen, closeBooking } = useBooking();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isBookingOpen) return undefined;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const keyHandler = (event) => {
      if (event.key === "Escape") closeBooking();

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = panelRef.current.querySelectorAll(focusableSelector);
      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", keyHandler);

    const focusableElements = panelRef.current?.querySelectorAll(focusableSelector);
    focusableElements?.[0]?.focus();

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", keyHandler);
    };
  }, [closeBooking, isBookingOpen]);

  const transition = useMemo(
    () =>
      reducedMotion
        ? { duration: 0 }
        : {
            duration: 0.35,
            ease: [0.2, 0.8, 0.2, 1],
          },
    [reducedMotion]
  );

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-50">
          <motion.button
            aria-label="Close booking panel"
            className="absolute inset-0 bg-black/45"
            onClick={closeBooking}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />

          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Booking drawer"
            className="absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto border-l border-[var(--color-stroke)] bg-[var(--color-bg)] p-5 shadow-2xl sm:p-7"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={transition}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[var(--color-ink-900)]">Complete your booking</h2>
              <button
                type="button"
                className="rounded-full border border-[var(--color-stroke)] px-3 py-2 text-sm text-[var(--color-ink-700)] transition hover:bg-[var(--color-surface)]"
                onClick={closeBooking}
              >
                Close
              </button>
            </div>

            <BookingForm mode="drawer" onCompleted={closeBooking} />
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
