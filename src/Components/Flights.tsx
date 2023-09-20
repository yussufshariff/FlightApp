import { useState, useEffect } from "react";
import { getFlight } from "Utils/api"; // Import the getFlight function

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

interface FlightsProps {
  departure: string;
  arrival: string;
  loading: boolean;
}

export default function Flights({ departure, arrival }: FlightsProps) {
  const [flights, setFlights] = useState<FlightData[] | null>(null);

  useEffect(() => {
    if (departure && arrival) {
      getFlight(departure, arrival)
        .then((flightData: FlightData[] | null) => {
          setFlights(flightData); // Update state with an array of FlightData objects
        })
        .catch((error) => {
          console.error("Error fetching flight data:", error);
        });
    }
  }, [departure, arrival]);

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
