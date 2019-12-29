import React from "react";

export const SingleProductImage = ({ imgURL, idx }) => {
  let cName = "product-image_container";
  cName += " first-product";
  return (
    <div className={cName}>
      <img src={imgURL} height="200px" width="200px" />
    </div>
  );
};
