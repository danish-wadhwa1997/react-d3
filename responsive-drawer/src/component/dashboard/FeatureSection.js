import React from "react";

const FeatureSection = () => {
  return (
    <section id="feature-section">
      <div className="card flex-column justify-content-start overflow-scrol">
        <h3
          className="left-border-box heading highlight-heading"
          style={{ flexGrow: 1, marginTop: 0 }}
        >
          Investments
        </h3>
        <p style={{ flexGrow: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum elit id auctor mollis. Aenean feugiat commodo quam,
          vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
          eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
        </p>
      </div>
      <div className="card left-bottom-round flex-column justify-content-start">
        <h3
          className="left-border-box heading highlight-heading"
          style={{ flexGrow: 1, marginTop: 0 }}
        >
          Stocks
        </h3>
        <p style={{ flexGrow: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum elit id auctor mollis.
        </p>
        <button
          style={{ flexGrow: 1 }}
          className="primary-button left-bottom-round-button"
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
