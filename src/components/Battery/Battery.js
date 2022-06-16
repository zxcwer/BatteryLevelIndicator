import React from "react";

const Battery = () => {
  initBattery();
  function initBattery() {
    const batteryLiquid = document.querySelector(".battery--liquid"),
      batteryStatus = document.querySelector(".battery--status"),
      batteryPercentage = document.querySelector(".battery--percentage");
    navigator.getBattery().then((batt) => {
      const updateBattery = () => {
        let level = Math.floor(batt.level * 100);
        batteryPercentage.innerHTML = level + "%";

        batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
      };
      updateBattery();
    });
  }

  return (
    <section className="battery">
      <div className="battery--card">
        <div className="battery--data">
          <p className="battery--text">Battery</p>
          <h1 className="battery--percentage">20%</h1>
          <p className="battery--status">
            Low battery <i className="ri-plug-line animated-green"></i>
          </p>
        </div>
        <div className="battery--pill">
          <div className="battery--level">
            <div className="battery--liquid"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Battery;
