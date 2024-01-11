const dubai = require("Photos/dubai.jpg");
const newyork = require("Photos/newyork.jpg");
const tokyo = require("Photos/tokyo.jpg");

const FeaturedFlights = [
  {
    name: "Dubai",
    api: "",
    img: dubai,
  },
  {
    name: "New York",
    api: "",
    img: newyork,
  },
  {
    name: "Tokyo",
    api: "",
    img: tokyo,
  },
];

export default function Featured() {
  return (
    <section>
      <h2>Featured Destinations</h2>

      {FeaturedFlights.map((city) => (
        <section>
          <p>{city.name}</p>
          <img src={city.img}></img>
        </section>
      ))}
    </section>
  );
}
