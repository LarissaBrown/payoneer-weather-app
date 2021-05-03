import React from "react";
import TempToggle from "../components/TempToggle";
// import Bargraph from "../components/Bargraph";
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";

export default function WeatherInfo() {

  return (
    <>
      <Grid container>
        <h1
          style={{
            paddingTop: "5%",
            color: "white",
            fontSize: "3em",
            width: "100%",
            textAlign: "center",
          }}
        >
          The Weather Report Munich
        </h1>
        <h2
          style={{
            color: "rgb(18, 48, 75)",
            padding: "40px",
            fontWeight: "lighter",
          }}
        >
          “If enough people think of a thing and work hard enough at it, I guess
          it’s pretty nearly bound to happen, wind and weather permitting.” –
          Laura Ingalls Wilder
        </h2>
        <Grid container>
          <TempToggle />
        </Grid>
        <Carousel />
        <Grid
          container
          style={{ position: "relative", height: "100px" }}
        ></Grid>
        <Grid container>
          {/* <Bargraph /> */}
        </Grid>
      </Grid>
    </>
  );
}
