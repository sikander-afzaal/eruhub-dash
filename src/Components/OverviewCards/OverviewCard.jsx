import "./OverviewCard.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OverviewCard = ({ topText, percent, name, status }) => {
  const colors = {
    positive: "#1BC98E",
    negative: "#E64759",
  };
  return (
    <div className="overview-card">
      <div className="overview-desc">
        <h2>
          {topText}
          <span>
            {percent}{" "}
            <FontAwesomeIcon
              style={{
                color:
                  status === "positive" ? colors.positive : colors.negative,
              }}
              icon={status === "positive" ? faCaretUp : faCaretDown}
            />
          </span>
        </h2>
        <p>{name}</p>
      </div>
      <img src="/assets/overview-test.png" alt="" />
    </div>
  );
};

export default OverviewCard;
