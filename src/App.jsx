import { Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";

import RoomsPage from "./pages/RomsPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import LocationPage from "./pages/LocationPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Route>
    </Routes>
  );
}
