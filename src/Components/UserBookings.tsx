import { useState, useEffect } from "react";
import { getBookings } from "Utils/api";

interface BookingData {
  bookingId: number;
  flightId: string;
  userId: number;
  flight: {
    flightId: string;
    origin: string;
    destination: string;
    departureDate: string;
    arrivalDate: string;
    airline: string;
    aircraft: string;
    availableSeats: number;
    price: number;
  };
  bookingDate: string;
  numPassengers: number;
  totalPrice: number;
  isCancelled: boolean;
  children?: JSX.Element | JSX.Element[];
}

export default function UserBookings() {
  const [booking, setBooking] = useState<BookingData[] | null>(null);

  useEffect(() => {
    getBookings(1)
      .then((bookingData: BookingData[] | null) => {
        setBooking(bookingData);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, []);

  return (
    <section>
      <h1>Your Bookings</h1>
      <div>
        {booking?.map((b) => (
          <section>
            <p>Flight Number: {b.flight.flightId}</p>
            <p>Booking Date: {b.bookingDate}</p>
            <p>Number of Passengers: {b.numPassengers}</p>
            <p>Total Price: {b.totalPrice}</p>
            <section>
              <p>Airline: {b.flight.airline}</p>
              <p>Aircraft: {b.flight.aircraft}</p>
              <p>Origin: {b.flight.origin}</p>
              <p>Destination: {b.flight.destination}</p>
              <p>Available Seats: {b.flight.availableSeats}</p>
            </section>
          </section>
        ))}
      </div>
    </section>
  );
}
