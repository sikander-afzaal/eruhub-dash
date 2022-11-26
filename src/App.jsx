import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/MainDash/Dashboard/Dashboard";
import Conversation from "./Pages/MainDash/Conversation/Conversation";
import Login from "./Pages/Login/Login";
import MainDash from "./Pages/MainDash/MainDash";
import Activity from "./Pages/MainDash/Activity/Activity";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-dash" element={<MainDash />}>
          <Route path="" element={<Dashboard />} />
          <Route path="conversation" element={<Conversation />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
