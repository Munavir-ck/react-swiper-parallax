import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";


const CountChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);




  useEffect(() => {
    

  }, []);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Total Bookings",
            data:[300,70,56,455,23,67,54],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
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
  }, [data]);

  return (
    <div className="h-96 w-full">
      <canvas ref={chartRef} style={{ height: "200px", width: "200px" }} />
    </div>
  );
};

export default  CountChart