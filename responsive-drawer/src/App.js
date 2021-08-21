import Toolbar from "./component/common/Toolbar";
import React from "react";
import Footer from "./component/common/Footer";
import Dashboard from "./component/dashboard/Dashboard";
import "./styles/grid.css";
import SideDrawer from "./component/common/SideDrawer";
function App() {
  return (
    <div style={{ height: "100%" }}>
      <Toolbar />
      <SideDrawer />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
