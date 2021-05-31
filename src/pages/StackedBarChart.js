import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

// const data = {
  // labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
//   previousDate: {
//     label: "08/10/2019 - 09/30/2019",
//     dataSet: [10000, 150000, 10000, 150000]
//   },
//   currentDate: {
//     label: "10/01/2019 - 11/20/2019",
//     dataSet: [10000, 225000, 10000, 225000]
//   }
// };

const StackedBarChart = () => {
  return (
    <StyledChartHolder>
      <Bar
        pointStyle="star"
        data={{
          labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
          datasets: [
            {
              label: "Mobile",
              backgroundColor: "#0066FF",
              barThickness: 45,
              data: ["10","20","30","40","50","60","70",],
            },
            {
                label: "Desktop",
                backgroundColor: "#0000FF",
                barThickness: 45,
                data: ["15","25","35","45","55","65","75",],
            },
            {
                label: "Servers",
                backgroundColor: "#000066",
                barThickness: 45,
                data: ["20","40","60","70","60","40","20",],
            }
          ]
        }}
        height={220}
        options={{
          responsive: true,
          scales: {
            x: {
                stacked: true,
                offset: 0
            },
            y: {
                stacked: true
            }
          }
        }}
      />
    </StyledChartHolder>
  );
}

const StyledChartHolder = styled.div`
    height: 100%;
    margin: 3em 1em;
    padding: 0;
    border-bottom: 0.5px double #000;
`

export default StackedBarChart;