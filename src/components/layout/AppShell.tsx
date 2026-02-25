import { Outlet } from "react-router-dom";
import { StickyNavbar } from "./StickyNavbar";

export function AppShell() {
  return (
    <div className="min-h-screen bg-[#ecece9] text-[#131313]">
      <StickyNavbar />
      <main className="pt-[74px]">
        <Outlet />
      </main>
    </div>
  );
}
