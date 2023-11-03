import { postBooking } from "Utils/api";

export default function PostBookings() {
  const handleSubmit = (e: any) => {
    console.log("Hello World");

    postBooking(17, "BA101", 9);
  };

  return (
    <section>
      <button onClick={handleSubmit}>Book now</button>
    </section>
  );
}
