import React from "react";
import WelcomeSection from "./WelcomeSection";
import "./dashboard.css";
import FeatureSection from "./FeatureSection";
import ProductsSection from "./ProductsSection";

const Dashboard = () => {
  return (
    <section className="row">
      <WelcomeSection />
      <FeatureSection />
      <ProductsSection />
    </section>
  );
};

export default Dashboard;
