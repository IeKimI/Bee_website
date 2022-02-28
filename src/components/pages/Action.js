import React from "react";
import "../../App.css";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "image/pot.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "image/pot1.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "image/brochure.png",
    width: 2,
    height: 5,
  },
  {
    src: "image/brochure2.png",
    width: 2,
    height: 5,
  },
];

function Action() {
  return (
    <>
      <Gallery photos={photos} />;
    </>
  );
}

export default Action;
