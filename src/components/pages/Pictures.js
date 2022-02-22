import React from "react";
import "../../App.css";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "image/pollination1.png",
    width: 4,
    height: 3,
  },
  {
    src: "image/lifecycle1.png",
    width: 1,
    height: 2,
  },
  {
    src: "image/flower.jpg",
    width: 2,
    height: 2,
  },
  {
    src: "image/brochure1.png",
    width: 1,
    height: 2,
  },
  {
    src: "image/exhibit.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "image/woodwork.jpg",
    width: 1,
    height: 1,
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
