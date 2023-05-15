import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import oneBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div className="homeP">
      <Link to="/beers">See All Beers</Link>
      <img src={beers} alt="beers" />
      <Link to="/random-beer">See a Random Beer</Link>
      <img src={oneBeer} alt="new-beer" />
      <Link to="/new-beer">Add a New Beer</Link>
      <img src={randomBeer} alt="beers" />
    </div>
  );
}

export default Home;
