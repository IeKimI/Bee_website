import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="video/bee_vid1.mp4" autoPlay loop muted />
      <h1>Urban Garden Center Bee Exhibit</h1>
      <p>An Interactive Qualifying Project by the WPI Bee Team</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH BEE TOUR <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
