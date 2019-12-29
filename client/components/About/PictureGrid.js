import React from "react";

const images = [
  "../../assets/images/apricot.jpg",
  "../../assets/images/cuc.jpg",
  "../../assets/images/lemon.jpg",
  "../../assets/images/watermelon.jpg",
  "../../assets/images/prickly.jpg",
  "../../assets/images/salt.jpg"
];

export const PictureGrid = props => {
  return (
    <div id="imageContainer">
      {images.map((i, idx) => {
        return <img key={idx} src={`${i}`} />;
      })}
    </div>
  );
};
