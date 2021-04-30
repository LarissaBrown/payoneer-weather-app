import React , {useEffect} from 'react'
import spin from './spin.svg'
import WeatherInfo from './WeatherInfo'
import Bargraph from "../components/Bargraph";
import {Carousel} from "../components/Carousel";
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { getItemsByVisibilityFilter , getItems} from "../redux/reducers/selectors";
import { VISIBILITY_FILTERS } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, isLoaded, getPlayers,  eightTimesData} from "../redux/actions"


function Loading(){
    const weather = useSelector(state => state.weather)
    const loaded = useSelector(state => state.isLoaded)
    const fiveDayData = useSelector(state => state.fiveDayData)
    const eightTimesData = useSelector(state => state.eightTimesData)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchWeather())
        dispatch(isLoaded())
        dispatch(getPlayers())
       


       
    }, []
    )

        
 return(
    <React.Fragment>
  
  
    {
     loaded
        ?
   
        <Grid container  > 
            <Grid  >
                <p style={{color: "white", fontSize: "7vw"}}>
                    Weather App
                </p>
            <img src={spin} alt="spin" className="App-spin"/>
                <p style={{color: "white", fontSize: "4vw"}}>
                    Loading ...
                </p>
               
            </Grid>
        </Grid>
    
        :
        <Grid container style={{ alignItems: "center", justifyContent: "center", height: "100%"}}>
        <Grid  container style={{position:"relative", height: "auto"}}> 
        {console.log("loadedWeatherData")}
            <WeatherInfo  />
        </Grid >
   
            <Carousel />
       
        <Grid container style={{position: "relative", height: "100px"}}></Grid>
        <Grid container style={{position: "relative", height: "auto"}}>
            <Bargraph />
      </Grid>
        </Grid>
    }
   </React.Fragment>
 )  
}
export default connect(state => ({
    weather: state.weather,
    fiveDayData: state.fiveDayData,
    isLoaded: state.isLoaded,
    eightTimesData: state.eightTimesData
  }))(Loading)