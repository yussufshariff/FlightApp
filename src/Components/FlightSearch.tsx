import "../Styles/FlightSearch.css";
import { getFlight } from "Utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import Featured from "./Featured";

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

export default function FlightSearch() {
  const navigate = useNavigate();

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState<FlightData[]>([]);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const flightData = await getFlight(departure, arrival);
      setFlightData(flightData);
      navigate(`/Flights?departure=${departure}&arrival=${arrival}`);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <ScaleLoader height={35} color={"#000000"} loading={loading} />
      </div>
    );
  }

  return (
    <div className="scan">
      <h1 className="scan-title">Search for a flight</h1>
      <div className="scan-input">
        <form className="scan-input" onSubmit={handleSearch}>
          <label htmlFor="Departure">From</label>
          <input
            type="text"
            name="departure"
            placeholder="Departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
          <label htmlFor="Arrival">To</label>
          <input
            type="text"
            name="arrival"
            placeholder="Destination"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
          <label htmlFor="Departure">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departure"
            placeholder="Departure Date"
          />
          <label htmlFor="Arrival"> Arrival Date </label>
          <input
            type="date"
            name="arrival"
            id="arrivalDate"
            placeholder="Arrival Date"
          />
          <button className="scan-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <Featured />
    </div>
  );
}
