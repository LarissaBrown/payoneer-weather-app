import React, { useContext, useEffect } from "react";
import { v4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import { ContextStore } from "../ContextStore";
import axios from "axios";

export default function Bargraph() {
  const {
    eightTimesData,
    setIsHidden,
    setEightTimesData,
    setOneDayCardData,
  } = useContext(ContextStore);

  console.log("eightTimesGraphData", eightTimesData);

  useEffect(() => {
    async function loadingGraphData() {
      try {
        const response = axios.get(
          "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
        );

        const nowWeatherData = response.data.list;

        let oneDayWeatherData = [];
        let nowEightTimesData = [];

        setEightTimesData(
          nowWeatherData.map((item) => {
            item.dt_txt.split(" ")[1] === "00:00:00" &&
              oneDayWeatherData.push(item);

            if (nowEightTimesData === []) {
              nowEightTimesData.push(item.dt_txt.split(" ")[0]);
            } else if (nowEightTimesData[0] === item.dt_txt.split(" ")[0]) {
              nowEightTimesData.push(item.dt_txt.split(" ")[0]);
            } else if (nowEightTimesData[0] !== item.dt_txt.split(" ")[0]) {
              return nowEightTimesData;
            }
            return nowEightTimesData;
          })
        );
        setEightTimesData(nowEightTimesData);
        setOneDayCardData(oneDayWeatherData);

        setIsHidden(false);
      } catch (err) {
        console.log("error", err);
        setIsHidden(null);
      }
    }
    if (eightTimesData === []) {
      loadingGraphData();
    }
  }, [eightTimesData, setEightTimesData, setIsHidden, setOneDayCardData]);

  return (
    <Grid container className="bargraph">
      <h1
        style={{
          position: "absolute",
          top: "10px",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        Temperature Throughout the Day
      </h1>
      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "50px" }}
          key={v4()}
          time={eightTimesData[0].dt_txt.split(" ")[0]}
        ></div>
      </div>

      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "100px" }}
          key={v4()}
          time={eightTimesData[1].dt_txt.split(" ")[0]}
        ></div>
      </div>

      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "80px" }}
          key={v4()}
          time={eightTimesData[2].dt_txt.split(" ")[0]}
        ></div>
      </div>

      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "130px" }}
          key={v4()}
          time={eightTimesData[3].dt_txt.split(" ")[0]}
        ></div>
      </div>

      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "90px" }}
          key={v4()}
          time={eightTimesData[4].dt_txt.split(" ")[0]}
        ></div>
      </div>

      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "150px" }}
          key={v4()}
          time={eightTimesData[5].dt_txt.split(" ")[0]}
        ></div>
      </div>

      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "60px" }}
          key={v4()}
          time={eightTimesData[6].dt_txt.split(" ")[0]}
        ></div>
      </div>
      <div className="bar-container">
        <div
          className="bar"
          style={{ height: "60px" }}
          key={v4()}
          time={eightTimesData[7].dt_txt.split(" ")[0]}
        ></div>
      </div>
    </Grid>
  );
}
