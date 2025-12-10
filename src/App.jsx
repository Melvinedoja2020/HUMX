import "./App.css";
import { Routes, Route } from "react-router-dom";
import Resturant from "./pages/Resturant";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Amenities from "./components/Amenities";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";

import AmenitiesPage from "./pages/Amenities";
import Rooms from "./pages/Rooms";
import ContactForm from "./pages/Contacts";
import LocationPage from "./pages/Location";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Amenities />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Resturant" element={<Resturant />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/Amenities" element={<AmenitiesPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/location" element={<LocationPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
