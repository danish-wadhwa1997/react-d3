import Toolbar from "./component/common/Toolbar";
import React from "react";
import Footer from "./component/common/Footer";
import Dashboard from "./component/dashboard/Dashboard";
import SideDrawer from "./component/common/SideDrawer";
import "./styles/common.css";
function App() {
  const [showSideDrawer, setShowSideDrawer] = React.useState(false);

  const toggleSideDrawer = (currentState) => {
    setShowSideDrawer(!currentState);
  };
  return (
    <div style={{ height: "100%" }}>
      <Toolbar toggleSideDrawer={() => toggleSideDrawer(showSideDrawer)} />
      <SideDrawer
        open={showSideDrawer}
        toggleSideDrawer={() => toggleSideDrawer(showSideDrawer)}
      />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
