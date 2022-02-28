import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function PictureCard(props) {
  return (
    <div className="cards">
      <h1>Photo Gallery</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/pollination1.png"
              text="Pollination"
              label="Photo"
              path="/pictures/pollination"
            />
            <CardItem
              src="image/lifecycle.png"
              text="Life cycle of honey bees"
              label="Photo"
              path="/pictures/lifecycle"
            />
            <CardItem
              src="image/decline.jpg"
              text="Decline in pollinator diversity and its impact"
              label="Photo"
              path="/pictures/decline"
            />
            <CardItem
              src="image/brochure1.png"
              text="Call to action"
              label="Photo"
              path="/pictures/action"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PictureCard;
