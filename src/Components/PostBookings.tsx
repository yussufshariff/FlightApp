import { postBooking } from "Utils/api";

export default function PostBookings({ flightId }: any) {
  const handleSubmit = (e: any) => {
    postBooking(17, flightId, 9);
  };

  return (
    <section>
      <button onClick={handleSubmit}>Book now</button>
    </section>
  );
}
