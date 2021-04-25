import React , {useEffect, useRef} from 'react'
import spin from './spin.svg'
import WeatherInfo from './WeatherInfo'
import axios from 'axios'
import { Row, Col } from 'react-grid' 





export default function Loading(props){
    
 let isHidden = true

 
 

    useEffect(()=> {
       
        
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
        .then(response => {
        
           const weatherData = response.data
           isHidden = true
           return  weatherData
        })
        .catch(err => console.error("error",err))
   
            
    }, [])
    

        
 return(
    <>
    {
     isHidden
        ?
   
        <Row style={
            {  
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%", 
            viewHeight: "80%", 
            backgroundColor: "#282c34"}
            }> 
            <Col >
                <p style={{color: "white", fontSize: "9vw"}}>
                    Weather App
                </p>
            <img src={spin} alt="spin" className="App-spin"/>
                <p style={{color: "white", fontSize: "4vw"}}>
                    Loading ...
                </p>
               
            </Col>
        </Row>
    
        :
        <Row>
        {console.log("loadedWeatherData")}
        <WeatherInfo  />
        </Row>
    }
    </ >
 )  
}
