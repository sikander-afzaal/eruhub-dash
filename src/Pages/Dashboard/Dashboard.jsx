import OverviewCard from "../../Components/OverviewCards/OverviewCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-dashboard">
        <OverviewCard
          status={"positive"}
          name="Total Messages"
          topText="14,938"
          percent="5%"
        />
        <OverviewCard
          status={""}
          name="Total Conversations"
          topText="2,358"
          percent="1.3%"
        />
        <OverviewCard
          status={""}
          name="Avg. Conv. Steps/User"
          topText="2.4"
          percent="6.75%"
        />
        <OverviewCard
          status={""}
          name="Avg. Conv. Steps/User"
          topText="6,358"
          percent="1.25%"
        />
        <OverviewCard
          status={"positive"}
          name="Total Sent"
          topText="7,158"
          percent="25.50%"
        />
        <OverviewCard
          status={"positive"}
          name="Total Received"
          topText="7,780"
          percent="13.65%"
        />
        <OverviewCard
          status={"positive"}
          name="Avg. Session Length"
          topText="4 Min"
          percent="1.30%"
        />
      </div>
    </div>
  );
};

export default Dashboard;
