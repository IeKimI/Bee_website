import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <h1>Check out our exhibit!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/render2.png"
              text="Lifecycle of Bees"
              label="Exhibit"
              path="/Bee_website/exhibit"
            />
            <CardItem
              src=""
              text="Bee Anatomy"
              label="Exhibit"
              path="/Bee_website/exhibit"
            />
            <CardItem
              src=""
              text="Economic / Agricultural Importance"
              label="Exhibit"
              path="/Bee_website/exhibit"
            />
            <CardItem
              src=""
              text="Mite / Habitat Loss / Africanized Bees"
              label="Exhibit"
              path="/Bee_website/exhibit"
            />
            <CardItem
              src=""
              text="Call to action"
              label="Exhibit"
              path="/Bee_website/exhibit"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
