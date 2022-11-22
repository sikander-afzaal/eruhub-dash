import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Layout/Sidebar/Sidebar";
import TopBar from "./Layout/TopBar/TopBar";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="App">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <div className="main-dash">
        <TopBar name="Dashboard" setSidebar={setSidebar} desc="Overview" />
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
