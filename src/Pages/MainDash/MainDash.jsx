import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import TopBar from "../../Layout/TopBar/TopBar";
const MainDash = () => {
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
    <div className="dash-page">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <div className="main-dash">
        <TopBar
          name={topBarText.name}
          setSidebar={setSidebar}
          desc={topBarText.desc}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default MainDash;
