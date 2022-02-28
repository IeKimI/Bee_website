import React from "react";
import "../../App.css";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "image/lifecycle1.png",
    width: 2,
    height: 3,
  },
  {
    src: "image/lifecycle_draw.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "image/installed_lifecycle.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "image/bees.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "image/bees_installed.jpg",
    width: 2,
    height: 3,
  },
];

function Lifecycle() {
  return (
    <>
      <Gallery photos={photos} />;
    </>
  );
}

export default Lifecycle;
