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
      case "/main-dash":
        setTopBarText({
          name: "Dashboard",
          desc: "Overview",
        });
        break;
      case "/main-dash/conversation":
        setTopBarText({
          name: "Message",
          desc: "Chat With Users",
        });
        break;
      case "/main-dash/activity":
        setTopBarText({
          name: "Activity",
          desc: "Overview",
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
