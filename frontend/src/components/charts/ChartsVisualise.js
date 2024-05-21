  import React from "react";
  import { Chart } from "react-google-charts";

  const ChartsVisualise = ({data}) => {
  

    const options = {
      title: "Blood Group Distribution",
      is3D: true
    };

    return (

      <div>
         <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"373px"}
      />
      </div>
      
    );
  };

  export default ChartsVisualise;
