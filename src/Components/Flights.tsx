import { useState, useEffect } from "react";
import { getFlight } from "Utils/api";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Flights.css";
import Navbar from "./Navbar";

import "../Styles/Navbar.css";

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

  const [isSmallerNavbar, setIsSmallerNavbar] = useState(false);

  const location = useLocation();

  const smallerNavbarRoutes = ["/Flights"];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const departure = queryParams.get("departure");
    const arrival = queryParams.get("arrival");

    if (departure && arrival) {
      getFlight(departure, arrival)
        .then((flightData: FlightData[] | null) => {
          setFlights(flightData);
        })
        .catch((error) => {
          console.error("Error fetching flight data:", error);
        });
    }

    if (smallerNavbarRoutes.includes(location.pathname)) {
      setIsSmallerNavbar(true);
    } else {
      setIsSmallerNavbar(false);
    }
  }, [location, location.pathname]);

  return (
    <section>
      <section className="flight-container">
        {flights && (
          <div>
            {flights.map((flight) => (
              <div key={flight.flightId} className="flight-box">
                <h3>{flight.airline}</h3>
                <p>
                  {flight.origin} - {flight.destination}
                </p>
                <p>
                  Departure Date:{" "}
                  {flight.departureDate.replace(/-/g, "/").slice(0, 10)}
                </p>
                <p>
                  Arrival Date:{" "}
                  {flight.arrivalDate.replace(/-/g, "/").slice(0, 10)}
                </p>
                <Link to={flight.flightId}>
                  <button>View Flight</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
