import "./App.css";
import { Routes, Route } from "react-router-dom";
import Resturant from "./pages/Resturant";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Resturant" element={<Resturant />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
