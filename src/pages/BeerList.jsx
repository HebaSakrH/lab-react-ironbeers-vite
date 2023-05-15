import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function BeersList() {
  const [beersArr, setBeersArr] = useState([]);
  const allBeers = async () => {
      const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
          );
          setBeersArr(response.data);
        };
        
        useEffect(() => {
            allBeers();
        }, []);
        console.log(beersArr)

  return (
    <div>
      <Header />
      {beersArr.map((beers) => {
        return (
          <div key={beers._id}>
            <Link to={"/beers/" + beers._id}>
              <img src={beers.image_url} alt="" />
              <h2>{beers.name}</h2>
              <h3>{beers.tagline}</h3>
              <div>
                Created by: <span>{beers.contributed_by}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
