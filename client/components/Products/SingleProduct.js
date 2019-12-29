import React from "react";

export const SingleProduct = ({ product, idx, deleteP }) => {
  let cName = "product-desc_container";

  // if (idx === 0) {
  cName += " first-product";
  // }
  if (idx === 2) {
    cName += " last-product";
  }
  return (
    <div className={cName}>
      {product.description.map((p, idx) => {
        return (
          <div key={idx} style={{ color: `${product.color}` }}>
            {p}
          </div>
        );
      })}
      {/* <div onClick={() => deleteP(product.id)}>X</div> */}
    </div>
  );
};
