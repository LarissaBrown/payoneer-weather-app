import React , {useEffect} from 'react'
import spin from './spin.svg'
import WeatherInfo from './WeatherInfo'
import Bargraph from "../components/Bargraph";
import {Carousel} from "../components/Carousel";
//basic grid layout
import Grid from '@material-ui/core/Grid';
import { useSelector , useDispatch } from 'react-redux'
import { isLoaded, isHidden, weatherData } from '../actions'
import axios from 'axios'



export default function Loading(){
    const hidden = useSelector(state => state.isHidden)
    const weather = useSelector(state => state.weatherData)
    const dispatch = useDispatch()
    let payload =
    
    useEffect(()=> {
       
        // axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
        // .then(response => {
        
        //   payload = response.data.list
        //   dispatch(isLoaded())
        //   dispatch(weatherData(), payload)
        //   console.log("payload", payload)
        //   return payload 
        // })
        // .catch(err => console.error("error",err))
        dispatch(isHidden())
    }, [dispatch])
    
 
 console.log("weather", weather)
 console.log("isLoaded", isLoaded)
 console.log(isHidden)

        
 return(
    <React.Fragment>
  
  
    {
     hidden
        ?
   
        <Grid container  > 
            <Grid item >
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
