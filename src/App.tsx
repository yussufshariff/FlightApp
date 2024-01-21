import Navbar from "../src/Components/Navbar";
import FlightSearch from "Components/FlightSearch";
import Flights from "Components/Flights";
import Footer from "Components/Footer";
import SingleFlight from "Components/SingleFlight";
import UserBookings from "Components/UserBookings";
import UserProfile from "Components/UserProfile";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar isSmaller="smallerNavbar" />
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Flights/:flightId" element={<SingleFlight />}></Route>
        <Route path="/Profile" element={<UserProfile />}></Route>
        <Route path="/Bookings" element={<UserBookings />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
