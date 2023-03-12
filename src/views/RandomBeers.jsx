import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function RandomBeers() {
  const [beerRandom, setBeerRandom] = useState(null);

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response);
      setBeerRandom(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className="page">
      <Header />
      <h1>Beer Details</h1>
      {beerRandom && (
        <div className="detail-card">
          <img src={beerRandom.image_url} alt={beerRandom.name} />
          <div className="content">
            <h2>{beerRandom.name}</h2>
            <h4>{beerRandom.tagline}</h4>
            <p>{beerRandom.attenuation_level}</p>
            <p>{beerRandom.first_brewed}</p>
            <p>{beerRandom.description}</p>
            <p>{beerRandom.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}