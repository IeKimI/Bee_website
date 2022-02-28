import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <h1>Photo Gallery</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/pollination2.png"
              text="Pollination"
              label="Info"
              path="./exhibit#pollination"
            />
            <CardItem
              src="image/lifecycle.png"
              text="Life cycle of honey bees"
              label="Info"
              path="./exhibit#lifecycle"
            />
            <CardItem
              src="image/decline.jpg"
              text="Decline in pollinator diversity and its impact"
              label="Info"
              path="./exhibit#decline"
            />
            <CardItem
              src="image/brochure1.png"
              text="Call to action"
              label="Info"
              path="./exhibit#action"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
