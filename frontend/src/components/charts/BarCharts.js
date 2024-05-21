import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Blood Group", "A+", "B+","O","AB","A-","B-","AB-","O-"],
  ["Group", 100, 150,120,80,50,75,30,90],
];

 
export const options = {
  chart: {
    title: "Bar Chart Visualisation",
    subtitle: "Blood Group Visualiation",
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="373px"
      data={data}
      options={options}
    />
  );
}
