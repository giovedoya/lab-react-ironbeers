import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

export default function BeerDetail() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(response);
      setBeer(response.data);
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
      {beer && (
        <div className="detail-card">
          <img src={beer.image_url} alt={beer.name} />
          <div className="content">
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>{beer.attenuation_level}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}
