import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ setSidebar, sidebar }) => {
  return (
    <>
      {sidebar && (
        <div onClick={() => setSidebar(false)} className="overlay">
          {" "}
        </div>
      )}
      <div className={`sidebar ${sidebar ? "active-sidebar" : ""}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className="sidebar-toggle"
          onClick={() => setSidebar(false)}
        />
        <img src="/assets/logo.png" alt="" />
        <nav>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={"/"}
          >
            <img src="/assets/ico-dash.png" alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setSidebar(false)}
            to={"/messages"}
          >
            <img src="/assets/ico-chat.png" alt="" />
            <p>Conversations</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setSidebar(false)}
            to={"/activity"}
          >
            <img src="/assets/ico-chart.png" alt="" />
            <p>Activity</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setSidebar(false)}
            to={"/retention"}
          >
            <img src="/assets/ico-heart.png" alt="" />
            <p>Retention</p>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
