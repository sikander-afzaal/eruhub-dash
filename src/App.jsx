import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Layout/Sidebar/Sidebar";
import TopBar from "./Layout/TopBar/TopBar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Conversation from "./Pages/Conversation/Conversation";

function App() {
  const { pathname } = useLocation();
  const [topBarText, setTopBarText] = useState({
    name: "Dashboard",
    desc: "Overview",
  });
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    switch (pathname) {
      case "/":
        setTopBarText({
          name: "Dashboard",
          desc: "Overview",
        });
        break;
      case "/conversation":
        setTopBarText({
          name: "Message",
          desc: "Chat With Users",
        });
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <div className="App">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <div className="main-dash">
        <TopBar
          name={topBarText.name}
          setSidebar={setSidebar}
          desc={topBarText.desc}
        />
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Conversation />} path="/conversation" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
