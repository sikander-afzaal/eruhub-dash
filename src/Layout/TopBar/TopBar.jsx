import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopBar.css";

const TopBar = ({ name, desc, setSidebar }) => {
  return (
    <div className="top-bar">
      <div className="flex">
        <FontAwesomeIcon
          onClick={() => setSidebar(true)}
          icon={faBars}
          className="sidebar-toggle"
        />
        <div className="left-top-bar">
          <h3>{name}</h3>
          <h2>{desc}</h2>
        </div>
      </div>
      <div className="right-top-bar">
        <img src="/assets/ico-message.png" alt="" />
        <div className="notif-div">
          <img src="/assets/ico-bell.png" alt="" />
          <div className="notif-dot"></div>
        </div>
        <div className="user-div">
          <img src="/assets/user1.png" alt="" />
          <div className="user-desc">
            <h3>Welcome</h3>
            <h2>
              Christeen Lee <FontAwesomeIcon icon={faCaretDown} />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
