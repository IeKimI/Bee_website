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
              src=""
              text="Pollination"
              label="Exhibit"
              path="/exhibit"
              hash="#pollination"
            />
            <CardItem
              src="image/lifecycle.png"
              text="Life cycle of honey bees"
              label="Exhibit"
              path="/exhibit"
              hash=""
            />
            <CardItem
              src=""
              text="Decline in pollinator diversity and its impact"
              label="Exhibit"
              path="/exhibit"
              hash=""
            />
            <CardItem
              src="image/brochure1.png"
              text="Call to action"
              label="Exhibit"
              path="/exhibit"
              hash=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
