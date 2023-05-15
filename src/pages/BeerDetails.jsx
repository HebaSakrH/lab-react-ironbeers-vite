import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

function BeerDetails() {
    const [BeerDetails, setBeerDetails] = useState();
    const { beerId } = useParams();
    console.log(beerId);

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `${"https://ih-beers-api2.herokuapp.com/beers/${_id}"}`
      );
      setBeerDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [beerId]);

  return (
    <div>
      <Header />
      <h3 key={beerId}>
        <Link to={`/details/${beerId}`}></Link>
      </h3>
    </div>
  );
}

export default BeerDetails;
