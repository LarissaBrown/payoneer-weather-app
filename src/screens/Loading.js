import React , {useEffect} from 'react'
import spin from './spin.svg'
import WeatherInfo from './WeatherInfo'
import { Row, Col } from 'react-grid' 
import { useSelector , useDispatch } from 'react-redux'
import {apiCallWeatherData} from '../actions'




export default function Loading(props){

    const isHidden = useSelector(state => state.isHidden)
    const weatherData = useSelector(state => state.weatherData)
    const dispatch = useDispatch()
    
    

    
 
 

    useEffect(()=> {
       
        
       
        dispatch(apiCallWeatherData())
        weatherData  &&  dispatch(isHidden)
            
    }, [dispatch, isHidden, weatherData])
    

        
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
        <h1>Hello</h1>
        <WeatherInfo  />
        </Row>
    }
    </ >
 )  
}
