import Navbar from "../src/Components/Navbar";
import FlightSearch from "Components/FlightSearch";
import Flights from "Components/Flights";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/Flights/*" element={<Flights />} />
      </Routes>
    </div>
  );
}

export default App;
