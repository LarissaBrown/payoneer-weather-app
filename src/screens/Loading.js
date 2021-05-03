import React, { useEffect, useReducer } from "react";
import spin from "./spin.svg";
import Grid from "@material-ui/core/Grid";
import { getPlayers } from "../state/actions"
import { CarouselItemsReducer, ToggleReducer }from '../state/reducer'


export default function Loading() {
 
  const [ carouselWeatherItems, dispatch, isHidden, isTempChecked
] = useReducer(
  CarouselItemsReducer, 
  ToggleReducer
  );

  
useEffect(()=> {
  
 
    dispatch(getPlayers())

  console.log("isHidden", isHidden)
  console.log("isTempChecked", isTempChecked)
   console.log("carouselWeatherItems in useEffect", carouselWeatherItems)

}, [dispatch, carouselWeatherItems])

  return (
    
     
        <Grid container>
          <Grid>
            <p style={{ color: "white", fontSize: "7vw" }}>Weather App</p>
            <img src={spin} alt="spin" className="App-spin" />
            <p style={{ color: "white", fontSize: "4vw" }}>Loading ...</p>
          </Grid>
        </Grid>
   
    
  );
}
