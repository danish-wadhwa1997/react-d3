import React from "react";

const FeatureSection = () => {
  return (
    <section id="feature-section">
      <div className="card flex-column flex-grow">
        <h3 className="left-border-box heading highlight-heading">
          Investments
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum elit id auctor mollis. Aenean feugiat commodo quam,
          vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
          eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
        </p>
      </div>
      <div className="card left-bottom-round flex-column flex-grow">
        <h3 className="left-border-box heading highlight-heading">Stocks</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum elit id auctor mollis.
        </p>
        <button className="primary-button left-bottom-round-button">
          Explore
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
