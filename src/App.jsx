import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Resturant from "./pages/Resturant";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import AmenitiesPage from "./pages/Amenities";
import Rooms from "./pages/Rooms";
import ContactForm from "./pages/Contacts";
import LocationPage from "./pages/Location";
import RoomDetails from "./pages/RoomDetails";
import BookingConfirmation from "./pages/BookingConfirmation";
import ViewBookings from "./pages/ViewBookings";
import { BookingDrawer } from "./components/booking/BookingDrawer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Resturant" element={<Resturant />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetails />} />
        <Route path="/Amenities" element={<AmenitiesPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/booking/confirmation" element={<BookingConfirmation />} />
        <Route path="/booking/view" element={<ViewBookings />} />
      </Routes>

      <Footer />
      <BookingDrawer />
    </>
  );
}

export default App;
