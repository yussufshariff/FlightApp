import Navbar from "../src/Components/Navbar";
import FlightSearch from "Components/FlightSearch";
import Flights from "Components/Flights";
import SingleFlight from "Components/SingleFlight";
import UserBookings from "Components/UserBookings";
import UserProfile from "Components/UserProfile";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Flights/:flightId" element={<SingleFlight />}></Route>
        <Route path="/Profile" element={<UserProfile />}></Route>
        <Route path="/Bookings" element={<UserBookings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
