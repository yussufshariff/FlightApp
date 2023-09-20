import "../Styles/FlightSearch.css";
import Flights from "Components/Flights";
import { getFlight } from "Utils/api";

import { useState } from "react";

interface FlightData {
  flightId: string;
  origin: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  airline: string;
  aircraft: string;
  availableSeats: number;
  price: number;
}

export default function FlightScanner() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState<FlightData[]>([]);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const flightData = await getFlight(departure, arrival);
      setFlightData(flightData);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scan">
      <h1 className="scan-title">Search for a flight here</h1>
      <div className="scan-input">
        <form onSubmit={handleSearch} className="scan-input">
          <label htmlFor="Departure"></label>
          <input
            type="text"
            name="departure"
            placeholder="From"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          ></input>
          <label htmlFor="Arrival"></label>
          <input
            type="text"
            name="arrival"
            placeholder="To"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          ></input>
          <button className="scan-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <Flights departure={departure} arrival={arrival} loading={loading} />
    </div>
  );
}
