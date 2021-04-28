import React, { useEffect } from "react";
import Bargraph from "../components/Bargraph";
import TempToggle from "../components/TempToggle";
// import CardCarousel from "../components/CardCarousel";
import { useSelector, useDispatch } from "react-redux";
import { isLoaded } from "../actions";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

export default function WeatherInfo() {
  const weatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoaded);
  }, [dispatch, weatherData]);

  return (
    <React.Fragment>
   
   <Grid container >
      <header style={{ color: "white" ,fontSize: "3em", width: "100%", textAlign: "center" }}>The Weather Report Munich</header>
      <h4 style={{ color: "white", padding: "30px" }}>
        “If enough people think of a thing and work hard enough at it, I guess
        it’s pretty nearly bound to happen, wind and weather permitting.” –
        Laura Ingalls Wilder
      </h4>
      <Grid container >
        <TempToggle />
      </Grid>
      <Grid container style={{alignItems: "center", justifyContent: "center"}}>
      {/* <CardCarousel /> */}
      </Grid>
      <Grid container><h1 style={{ color: "white", width: "100%", textAlign: "center" }}>Temperature Throughout the Day</h1>
      
        <Bargraph />
      </Grid>
    </Grid>
    </React.Fragment>
  );
}
