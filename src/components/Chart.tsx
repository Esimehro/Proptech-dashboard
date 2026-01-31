import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", blue: 35, green: 26, red: 10 },
  { month: "Feb", blue: 5, green: 26, red: 10 },
  { month: "Mar", blue: 14, green: 0, red: 3 },
  { month: "Apr", blue: 14, green: 25, red: 10 },
  { month: "May", blue: 9, green: 2, red: 7 },
  { month: "Jun", blue: 34, green: 47, red: 7 },
  { month: "Jul", blue: 23, green: 34, red: 18 },
  { month: "Aug", blue: 23, green: 5, red: 17 },
  { month: "Sep", blue: 35, green: 31, red: 5 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis
          label={{ value: "50m", position: "top", offset: 10 }}
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
        />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="blue" fill="#4169E1" />
        <Bar dataKey="green" fill="#2ECC71" />
        <Bar dataKey="red" fill="#E74C3C" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
