import HomePage from "./pages/Home";
import { BookingProvider } from "./context/BookingContext";

export default function App() {
  return (
    <BookingProvider>
      <HomePage />
    </BookingProvider>
  );
}
