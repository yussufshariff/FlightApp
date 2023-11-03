import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

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

export const getFlight = (
  departure: any,
  arrival: any
): Promise<FlightData[]> => {
  return axios
    .get(
      `https://localhost:7039/api/FlightLocation?departure=${departure}&arrival=${arrival}`
    )
    .then((res: any) => {
      return res.data.map((element: FlightData) => {
        return {
          flightId: element.flightId,
          origin: element.origin,
          destination: element.destination,
          departureDate: element.departureDate,
          arrivalDate: element.arrivalDate,
          airline: element.airline,
        };
      });
    });
};

export const getSingleFlight = (flightId: string) => {
  return axios
    .get(`https://localhost:7039/api/Flight/${flightId}`)
    .then((response: any) => {
      return response.data;
    });
};
