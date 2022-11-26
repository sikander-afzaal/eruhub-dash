import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Pages/MainDash/Dashboard/Dashboard";
import Conversation from "./Pages/MainDash/Conversation/Conversation";
import Login from "./Pages/Login/Login";
import MainDash from "./Pages/MainDash/MainDash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-dash" element={<MainDash />}>
          <Route path="" element={<Dashboard />} />
          <Route path="conversation" element={<Conversation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
