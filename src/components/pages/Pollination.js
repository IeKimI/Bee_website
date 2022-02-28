import React from "react";
import "../../App.css";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "image/pollination1.png",
    width: 2,
    height: 1,
  },
  {
    src: "image/pollination_installed.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "image/pollination_installed2.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "image/matching_draw.png",
    width: 2,
    height: 3,
  },
  {
    src: "image/matching_pollinator.png",
    width: 2,
    height: 3,
  },
  {
    src: "image/matching_game.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "image/matching_magnet.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "image/slider.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "image/slider_installed.jpg",
    width: 2,
    height: 3,
  },
];

function Pictures() {
  return (
    <>
      <Gallery photos={photos} />;
    </>
  );
}

export default Pictures;
