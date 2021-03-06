import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const data = {
  labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
  previousDate: {
    label: "08/10/2019 - 09/30/2019",
    dataSet: [10000, 150000, 10000, 150000]
  },
  currentDate: {
    label: "10/01/2019 - 11/20/2019",
    dataSet: [10000, 225000, 10000, 225000]
  }
};

const BarChart = () => {
  return (
    <StyledChartHolder>
      <Bar
        pointStyle="star"
        data={{
          labels: data.labels,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Mobile",
              pointStyle: "rectRounded",
              backgroundColor: "#1497FF",
              barThickness: 20,
              categoryPercentage: 1,
              data: data.previousDate.dataSet //From API
            },
            {
              label: "Desktop",
              backgroundColor: "#6ED3FF",
              barThickness: 20,
              categoryPercentage: 1,
              pointStyle: "triangle",
              data: data.currentDate.dataSet //From API
            }
          ]
        }}
        height={220}
        options={{
          offsetGridLines: true,
          drawTicks: true,
          layout: {
            padding: {
              top: 30,
              right: 40,
              bottom: 40
            }
          },
          legend: {
            display: true,
            position: "right",
            align: "start",
            labels: {
              usePointStyle: true
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  drawBorder: true
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  callback(n) {
                    if (n < 1e3) return n;
                    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  }
                }
              }
            ]
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

export default BarChart;