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

        if (level == 100) {
          batteryStatus.innerHTML = `Full battery <i className="ri-battery-2-fill green-color"></i>`;
          batteryLiquid.style.height = "103%";
        } else if (level <= 20 && batt.charging) {
          batteryStatus.innerHTML = `Low battery <i className="ri-plug-line animated-red"></i>`;
        } else if (batt.charging) {
          batteryStatus.innerHTML = `Charging... <i className="ri-flashlight-line animated-green "></i>`;
        } else {
          batteryStatus.innerHTML = ``;
        }

        if (level <= 20) {
          batteryLiquid.classList.add("gradient-color-red");
          batteryLiquid.classList.remove(
            "gradient-color-orange",
            "gradient-color-yellow",
            "gradient-color-green"
          );
        } else if (level <= 40) {
          batteryLiquid.classList.add("gradient-color-orange");
          batteryLiquid.classList.remove(
            "gradient-color-red",
            "gradient-color-yellow",
            "gradient-color-green"
          );
        } else if (level <= 80) {
          batteryLiquid.classList.add("gradient-color-yellow");
          batteryLiquid.classList.remove(
            "gradient-color-orange",
            "gradient-color-red",
            "gradient-color-green"
          );
        } else {
          batteryLiquid.classList.add("gradient-color-green");
          batteryLiquid.classList.remove(
            "gradient-color-orange",
            "gradient-color-yellow",
            "gradient-color-red"
          );
        }
      };
      updateBattery();

      batt.addEventListener("chargingchange", () => {
        updateBattery();
      });
      batt.addEventListener("levelchange", () => {
        updateBattery();
      });
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
