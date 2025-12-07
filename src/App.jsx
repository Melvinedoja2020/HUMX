import "./App.css";
import { Routes, Route } from "react-router-dom";
import Resturant from "./pages/Resturant";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Resturant" element={<Resturant />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
