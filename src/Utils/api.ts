import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

interface FlightData {
  airline: string;
  aircraft: string;
}

export const getFlight = (departure: any, arrival: any) => {
  return axios
    .get(
      `https://localhost:7039/api/FlightLocation?departure=${departure}&arrival=${arrival}`
    )
    .then((res: any) => {
      res.data.forEach((element: FlightData) => {
        console.log(element);
      });
    });
};
