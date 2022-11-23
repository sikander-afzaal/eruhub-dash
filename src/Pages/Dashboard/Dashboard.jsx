import OverviewCard from "../../Components/OverviewCards/OverviewCard";
import "./Dashboard.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const tableData = [
    {
      img: "/assets/user1.png",
      name: "Erika Bartell",
      msg: "Hi how are you how are. Can we talk now? Ping Me Back...",
      lastSeen: "20 April 2016",
      firstSeen: "20 May 2016",
      total: "3",
      min: "2",
      max: "5",
    },
    {
      img: "/assets/user1.png",
      name: "Erika Bartell",
      msg: "Hi how are you how are. Can we talk now? Ping Me Back...",
      lastSeen: "20 April 2016",
      firstSeen: "20 May 2016",
      total: "3",
      min: "2",
      max: "5",
    },
    {
      img: "/assets/user1.png",
      name: "Erika Bartell",
      msg: "Hi how are you how are. Can we talk now? Ping Me Back...",
      lastSeen: "20 April 2016",
      firstSeen: "20 May 2016",
      total: "3",
      min: "2",
      max: "5",
    },
  ];
  return (
    <div className="dashboard">
      <div className="top-dashboard">
        <OverviewCard
          status={"positive"}
          name="Total Messages"
          topText="14,938"
          percent="5%"
          graphColor={"#002619"}
          borderColor={"#1BC98E"}
        />
        <OverviewCard
          status={""}
          name="Total Conversations"
          topText="2,358"
          percent="1.3%"
          graphColor="#370006"
          borderColor="#E64759"
        />
        <OverviewCard
          status={""}
          name="Avg. Conv. Steps/User"
          topText="2.4"
          percent="6.75%"
          graphColor="#0D0041"
          borderColor="#9F86FF"
        />
        <OverviewCard
          status={""}
          name="Avg. Conv. Steps/User"
          topText="6,358"
          percent="1.25%"
          graphColor="#241D00"
          borderColor="#FFCC00"
        />
        <OverviewCard
          status={"positive"}
          name="Total Sent"
          topText="7,158"
          percent="25.50%"
          graphColor="#2C2C2C"
          borderColor="#FFCC00"
        />
        <OverviewCard
          status={"positive"}
          name="Total Received"
          topText="7,780"
          percent="13.65%"
          graphColor="#00234A"
          borderColor="#007AFF"
        />
        <OverviewCard
          status={"positive"}
          name="Avg. Session Length"
          topText="4 Min"
          percent="1.30%"
          graphColor="#4A0E00"
          borderColor="#FF5E3A"
        />
      </div>
      <div className="conversation-table">
        <div className="top-table">
          <h2>Conversations</h2>
          <div className="filter-div">
            <img src="/assets/ico-filter.png" alt="" />
            <p>Filter</p>
          </div>
        </div>
        <div className="bottom-table-wrap">
          <div className="bottom-table">
            <div className="table-head">
              <h2 className="left-align">User Name And Messages</h2>
              <h2>First Seen Date</h2>
              <h2>Last Seen Date</h2>
              <h2>Total Conversations</h2>
              <h2>Min Conv. Steps</h2>
              <h2>Max Conv. Steps</h2>
            </div>

            {tableData.map((elem, idx) => {
              return <TableRow {...elem} key={"table-row" + idx} />;
            })}
          </div>
        </div>
      </div>
      <div className="graphs-dashboard">
        <div className="graph-div">
          <div className="top-table">
            <h2>User Activity</h2>
            <div style={{ width: "140px" }} className="filter-div">
              <p>Last Month</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <img src="/assets/chart2.png" alt="" />
        </div>
        <div className="graph-div">
          <div className="top-table">
            <h2>Retention</h2>
            <div className="filter-div">
              <img src="/assets/ico-filter.png" alt="" />
              <p>Filter</p>
            </div>
          </div>
          <img src="/assets/chart2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const TableRow = ({ img, name, msg, lastSeen, firstSeen, total, min, max }) => {
  return (
    <div className="table-row">
      <div className="first-col">
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{msg}</p>
        </div>
      </div>
      <div>{firstSeen}</div>
      <div>{lastSeen}</div>
      <div>{total}</div>
      <div>{min}</div>
      <div>{max}</div>
    </div>
  );
};
