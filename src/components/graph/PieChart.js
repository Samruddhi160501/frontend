import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box, Typography } from "@mui/material";

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {value}
    </text>
  );
};

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 4,
            marginTop: 3,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: entry.color,
              marginRight: 8,
            }}
          ></div>
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const PieChartComponent = ({ data }) => (
  <Box
    sx={{
      paddingTop: 2,
      display: "flex",
      marginLeft: "7%",
    }}
  >
    <div style={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>
        Student Distribution by Branch Across All Years
      </Typography>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={renderCustomLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  </Box>
);

export default PieChartComponent;
