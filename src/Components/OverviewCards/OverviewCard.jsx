import "./OverviewCard.css";
import React, { PureComponent } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OverviewCard = ({
  topText,
  percent,
  name,
  status,
  graphColor,
  borderColor,
}) => {
  const colors = {
    positive: "#1BC98E",
    negative: "#E64759",
  };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
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
      <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={borderColor}
            fill={graphColor}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewCard;
