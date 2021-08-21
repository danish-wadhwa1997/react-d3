import React from "react";
import WelcomeSection from "./WelcomeSection";
import "./dashboard.css";
import FeatureSection from "./FeatureSection";
import ProductsSection from "./ProductsSection";

const Dashboard = () => {
  return (
    <section>
      <div className="row">
        <div className="col-xs-12 col-xl-6">
          <WelcomeSection />
        </div>
        <div className="col-xs-12 col-xl-6">
          <FeatureSection />
        </div>
      </div>
      <ProductsSection />
    </section>
  );
};

export default Dashboard;
