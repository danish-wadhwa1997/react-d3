import React from "react";
import RightArrowIcon from "../assets/RightArrowIcon";

const ProductsSection = () => {
  return (
    <article id="products-section">
      <div className="flex-column align-items-center">
        <h1 className="left-border-box heading highlight-heading">
          Your products
        </h1>
        <div>charts</div>
        <button className="secondary-button">
          <RightArrowIcon stroke="var(--dark-color)" />
        </button>
      </div>
    </article>
  );
};

export default ProductsSection;
