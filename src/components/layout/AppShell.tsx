import { Outlet } from "react-router-dom";
import { StickyNavbar } from "./StickyNavbar";
import { useBooking } from "../../context/BookingContext";
import { BookingDrawer } from "../booking/BookingDrawer";

export function AppShell() {
  const { isDrawerOpen, closeDrawer } = useBooking();

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a]">
      {/* Sticky Navigation */}
      <StickyNavbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Booking Drawer Modal */}
      {isDrawerOpen && <BookingDrawer onClose={closeDrawer} />}
    </div>
  );
}
