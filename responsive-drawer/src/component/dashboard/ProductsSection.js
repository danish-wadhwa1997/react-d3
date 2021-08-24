import React from "react";
import RightArrowIcon from "../assets/RightArrowIcon";
import BarChart from "../chart/BarChart";
const ProductsSection = () => {
  const data = [
    {
      product: "LIQID Cash",
      value: Math.floor(Math.random() * 850),
      color: "#c9b7c5",
      getInitialInvestment: function () {
        return Math.floor(Math.random() * this.value);
      },
      getGrowthRate: function () {
        // for one year of investment
        return (this.value * 100) / this.getInitialInvestment();
      },
    },
    {
      product: "LIQID Real Estate",
      value: Math.floor(Math.random() * 850),
      color: "#afddaf",
      getInitialInvestment: function () {
        return Math.floor(Math.random() * this.value);
      },
      getGrowthRate: function () {
        // for one year of investment
        return (this.value * 100) / this.getInitialInvestment();
      },
    },
    {
      product: "LIQID Wealth",
      value: Math.floor(Math.random() * 850),
      color: "#076283",
      getInitialInvestment: function () {
        return Math.floor(Math.random() * this.value);
      },
      getGrowthRate: function () {
        // for one year of investment
        return (this.value * 100) / this.getInitialInvestment();
      },
    },
    {
      product: "LIQID Private Equity",
      value: Math.floor(Math.random() * 850),
      color: "#79c6c0",
      getInitialInvestment: function () {
        return Math.floor(Math.random() * this.value);
      },
      getGrowthRate: function () {
        // for one year of investment
        return (this.value * 100) / this.getInitialInvestment();
      },
    },
    {
      product: "LIQID Venture",
      value: Math.floor(Math.random() * 850),
      color: "#ffe163",
      getInitialInvestment: function () {
        return Math.floor(Math.random() * this.value);
      },
      getGrowthRate: function () {
        // for one year of investment
        return (this.value * 100) / this.getInitialInvestment();
      },
    },
  ];
  return (
    <article id="products-section">
      <div className="flex-column align-items-center">
        <h1 className="left-border-box heading highlight-heading">
          Your products
        </h1>
        {/* width = width of bars=100 + margin=50 */}
        <BarChart data={data} width={150 * data.length} height={400} />
        <button className="secondary-button">
          {/* <RightArrowIcon stroke="var(--dark-color)" /> */}
        </button>
      </div>
    </article>
  );
};

export default ProductsSection;
