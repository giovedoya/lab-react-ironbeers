import React from "react";
import allBeers from "../assets/beers.png";
import randomBeers from "../assets/random-beer.png";
import newBeers from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="container">
        <div>
          <h1 className="main-heading">Beers</h1>
          <img src={allBeers} alt="all beers" />
          <Link to="/beers" className="sub-heading-link">
            <h2 className="sub-heading">All Beers</h2>
          </Link>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra purus at rutrum blandit. Sed interdum ligula nec placerat
            auctor. Phasellus feugiat, ante et gravida interdum, massa sapien
            venenatis eros, non pulvinar quam dui a erat.{" "}
          </p>
        </div>
        <div>
          <img src={randomBeers} alt="random beers" />
          <Link to="/random-beer" className="sub-heading-link">
            <h2 className="sub-heading">Random Beer</h2>
          </Link>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra purus at rutrum blandit. Sed interdum ligula nec placerat
            auctor. Phasellus feugiat, ante et gravida interdum, massa sapien
            venenatis eros, non pulvinar quam dui a erat.{" "}
          </p>
        </div>
        <div>
          <img src={newBeers} alt="new beers" />
          <Link to="/new-beer" className="sub-heading-link">
            <h2 className="sub-heading">New Beer</h2>
          </Link>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra purus at rutrum blandit. Sed interdum ligula nec placerat
            auctor. Phasellus feugiat, ante et gravida interdum, massa sapien
            venenatis eros, non pulvinar quam dui a erat.{" "}
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
