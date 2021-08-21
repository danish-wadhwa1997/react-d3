import Toolbar from "./component/common/Toolbar";
import React from "react";
import Footer from "./component/common/Footer";
import Dashboard from "./component/dashboard/Dashboard";
import "./styles/grid.css";
function App() {
  return (
    <div className="App">
      <Toolbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
