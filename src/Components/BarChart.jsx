import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const MyBarChart = ({ doctors }) => {
  const getDataChart = (doctors) => {
    return doctors.map((doctor) => ({
      name: doctor.name,
      fee: parseInt(doctor.fee.replace(/[^\d]/g, "")),
    }));
  };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
         Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const renderCustomLabel = ({ x, y, value, width }) => {
    return (
      <text
        x={x + width / 2} 
        y={y + 10} 
        fill="#a708fc"
        textAnchor="middle"
        fontSize={14}
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  const color = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28CF6",
    "#FF6F91",
    "#00B8D4",
    "#FF6D00",
    "#388E3C",
    "#D81B60",
    "#FF8042",
    "#A28CF6",
  ];

  const renderBarChart = (data) => (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#c9ced6" strokeDasharray="5 5"/>
        <Bar dataKey="fee" shape={<TriangleBar />} label={renderCustomLabel}>
          {data.map((value, index) => (
            <Cell key={`cell-${index}`} fill={color[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  const chartData = getDataChart(doctors);

  return <div>{renderBarChart(chartData)}</div>;
};

export default MyBarChart;
