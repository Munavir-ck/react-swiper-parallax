import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ totalBooking, bookingProfit, bookingCount, months }) => {
  const chartRef = useRef(null);

  let data = [
    { month: "January", profit: 12, revenue: 32, booking: 1 },
    { month: "February", profit: 13, revenue: 62, booking: 14 },
    { month: "March", profit: 23, revenue: 62, booking: 23 },
    { month:  "April", profit: 13, revenue: 52, booking: 18 },
    { month:  "May", profit: 13, revenue: 52, booking: 18 },
  ];

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: data.map((item)=>(item.month)),
        datasets: [
          {
            label: "Total Revenue",
            data: data.map((item)=>(item.revenue)),
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "Total Profit",
            data:data.map((item)=>(item.profit)),
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          },
          {
            label: "Total Booking",
            data: data.map((item)=>(item.booking)),
            borderColor: "rgba(11, 243, 28, 0.8)",
            backgroundColor: "rgba(11, 243, 28, 0.8)",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="h-96 w-96">
      <canvas ref={chartRef} style={{ height: "200px", width: "200px" }} />
    </div>
  );
};

export default LineChart;
