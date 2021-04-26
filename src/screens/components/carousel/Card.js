import React from 'react' 
import { Container, Row } from 'react-grid' 
import { useSelector , useDispatch } from 'react-redux'
import {apiCallWeatherData} from '../actions'



export default function Card(props){
 
    const isHidden = useSelector(state => state.isHidden)
    const weatherData = useSelector(state => state.weatherData)
    const dispatch = useDispatch()
    
    

    
 
 

    useEffect(()=> {
       
        
       
        dispatch(apiCallWeatherData())
        weatherData  &&  dispatch(isHidden)
            
    }, [dispatch, isHidden, weatherData])
    const handleBargraph = (i)=> {


        console.log("store i", i)
    
        weatherData.map((cardItem, index)=> {
    
            if(i === index || index < i+7){
    
                setArrTimes(arrTimes.push(cardItem))
            }
            if(arrTimes.length === 8){
            setThreeHourData(arrTimes)
            console.log("arrTimesLength", arrTimes.length)
    
            }
            setArrTimes([])
            return arrTimes
            
        })
           console.log("threehourdata.length", threeHourData.length)
        return threeHourData
        }



    return (

    <>
   
        
        <div  className="react-multi-carousel-item"  >
            
            {tempChecked
            ?
            <>
            <h3>{description}</h3>
            <h3> Temp: </h3>
            <p>{fahrenheit}F</p>
            </>
            :
            <>
            <h3>{description}</h3>
            <h3>Temp: </h3>
            <p>{celcius}C</p>
            </>
            } 
            <h4>Date:</h4>
            <p>{date}</p>
            {console.log("i",i)}
            <button onClick={()=> handleBargraph(i)} >View Data</button>

        </div>
        
    
    

    </>
    )
}