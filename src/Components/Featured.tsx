import "../Styles/Featured.css";
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
    <section className="featured-grid">
      {FeaturedFlights.map((city) => (
        <section>
          <p>{city.name}</p>
          <img src={city.img} className="featured-img"></img>
        </section>
      ))}
    </section>
  );
}
