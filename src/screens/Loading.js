import React, { useEffect, useContext } from "react";
import spin from "./spin.svg";
import WeatherInfo from "./WeatherInfo";
import Bargraph from "../components/Bargraph";
import { Carousel } from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import { ContextStore } from "../ContextStore";
// import axios from 'axios'

export default function Loading() {
  // const [result, setResult] = useState([]);
  const {
    weatherData,
    setWeatherData,
    isHidden,
    setCityName,
    setIsHidden,
  } = useContext(ContextStore);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
        );
        const json = await response.json();
        console.log("json", json);
        console.log("json.list", json.list);
        setWeatherData(json.list);
        console.log("weatherData", weatherData);
        setIsHidden(false);
        return weatherData;
      } catch (err) {
        console.log("error", err);
      }
    }
    if (weatherData === []) {
      fetchWeatherData();
    }
  }, [weatherData, setWeatherData, setIsHidden, setCityName]);

  return (
    <React.Fragment>
      {isHidden ? (
        <Grid container>
          <Grid>
            <p style={{ color: "white", fontSize: "7vw" }}>Weather App</p>
            <img src={spin} alt="spin" className="App-spin" />
            <p style={{ color: "white", fontSize: "4vw" }}>Loading ...</p>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container style={{ position: "relative", height: "auto" }}>
            {console.log("loadedWeatherData")}
            <WeatherInfo />
          </Grid>

          <Carousel />

          <Grid
            container
            style={{ position: "relative", height: "100px" }}
          ></Grid>
          <Grid container style={{ position: "relative", height: "auto" }}>
            <Bargraph />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}
