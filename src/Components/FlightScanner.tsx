import "../Styles/FlightScanner.css";
import { useEffect, useState } from "react";

export default function FlightScanner() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("From:", departure);
    console.log("To:", arrival);
  };

  return (
    <div className="scan">
      <h1 className="scan-title">Search for a flight here</h1>
      <div className="scan-input">
        <label htmlFor="Departure"></label>
        <input
          type="text"
          name="Departure"
          placeholder="From"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        ></input>
        <label htmlFor="Arrival"></label>
        <input
          type="text"
          name="Arrival"
          placeholder="To"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        ></input>
      </div>
      <button className="scan-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
