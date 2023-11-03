import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSingleFlight } from "Utils/api";
import { ScaleLoader } from "react-spinners";

import PostBookings from "Components/PostBookings";

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

export default function SingleFlight() {
  const [flight, setFlight] = useState<FlightData | null>(null);

  const location = useLocation();

  useEffect(() => {
    const idFlight = location.pathname.slice(9);
    getSingleFlight(idFlight)
      .then((flightData: FlightData | null) => {
        setFlight(flightData);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, [location]);

  return (
    <section>
      <h1>Single Flight</h1>
      <div>
        {flight === null ? (
          <ScaleLoader height={35} color={"#000000"} />
        ) : (
          <div>
            <p>Origin: {flight.origin}</p>
            <p>Destination: {flight.destination}</p>
            <p>Departure Date: {flight.departureDate}</p>
            <p>Arrival Date: {flight.arrivalDate}</p>
            <p>Airline: {flight.airline}</p>
            <p>Aircraft: {flight.aircraft}</p>
            <p>Available Seats: {flight.availableSeats}</p>
            <p>Price: {flight.price}</p>
          </div>
        )}

        <PostBookings />
      </div>
    </section>
  );
}
