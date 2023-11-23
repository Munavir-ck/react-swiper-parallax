import React, { useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/sidebar/SideBar";
import CountChart from '../Components/Chart/CountChart';
import Linechart from '../Components/Chart/LineChart';
import Chart from '../Components/Chart/Piechart';




const Dashboard = () => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/6">
        <Header setActive={setActive} isActive={isActive} />
      </div>

      <div className="h-5/6 flex flex-grow">
        <SideBar setActive={setActive} isActive={isActive} />
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 p-4 sm:pl-80">
  <div className="mb-4">
    <CountChart />
  </div>
  <div className="mb-4">
    <Linechart />
  </div>
  <div className="mb-4">
    <Chart />
  </div>
  {/* Add more grid items as needed */}
</div>

     
      </div>
    </div>
  );
};

export default Dashboard;
