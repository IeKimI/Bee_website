import React from "react";
import "../../App.css";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "image/decline.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "image/decline_poster.png",
    width: 2,
    height: 3,
  },
  {
    src: "image/decline2.jpg",
    width: 2,
    height: 3,
  },
];

function Decline() {
  return (
    <>
      <Gallery photos={photos} />;
    </>
  );
}

export default Decline;
