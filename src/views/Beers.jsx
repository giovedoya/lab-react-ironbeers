import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="container">
      <Header />
      <h1>All Beers</h1>

      {beers.map((elem) => {
        return (
          <div key={elem.id}>
            <img width="150px" src={elem.image_url} alt={elem.name} />
            <h2>{elem.name}</h2>
            <p>{elem.tagline}</p>
            <p>{elem.contributed_by}</p>
            <Link to={`/beers/${elem.id}`}>See more</Link>
          </div>
        );
      })}
    </div>
  );
}
