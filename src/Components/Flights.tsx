import { useState, useEffect } from "react";
import { getFlight } from "Utils/api";
import { useLocation } from "react-router-dom";

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

export default function Flights() {
  const [flights, setFlights] = useState<FlightData[] | null>(null);
  const location = useLocation();

  useEffect(() => {
    const pathWithQuery = location.pathname + location.search;
    const queryParams = new URLSearchParams(location.search);
    const departure = queryParams.get("departure");
    const arrival = queryParams.get("arrival");

    console.log("Path with Query:", pathWithQuery);
    console.log("Departure:", departure);
    console.log("Arrival:", arrival);

    if (departure && arrival) {
      getFlight(departure, arrival)
        .then((flightData: FlightData[] | null) => {
          setFlights(flightData);
        })
        .catch((error) => {
          console.error("Error fetching flight data:", error);
        });
    }
  }, [location]);

  return (
    <section>
      {flights && (
        <div>
          <h1>Flight Details</h1>
          {flights.map((flight) => (
            <div key={flight.flightId}>
              <h3>{flight.airline}</h3>
              <p>Departure Date: {flight.departureDate}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
