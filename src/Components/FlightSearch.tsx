import "../Styles/FlightSearch.css";
import { getFlight } from "Utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

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
      await new Promise((resolve) => setTimeout(resolve, 2000));
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
      <h1 className="scan-title">Search for a flight here</h1>
      <div className="scan-input">
        <form className="scan-input" onSubmit={handleSearch}>
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
    </div>
  );
}
