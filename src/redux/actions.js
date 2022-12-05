import axios from "axios"
import {v4} from 'uuid'
import { 
     ONE_DAY_WEATHER_DATA,
     LOAD_EIGHT_TIMES_DATA, 
     FIVE_DAY_DATA , 
     IS_LOADED, 
     IS_HIDDEN, 
     LOAD_WEATHER,
     SET_FILTER, 
     IS_CHECKED_TEMP,
     GRAPH_DATE_CLICKED,
    _LOCAL_ITEMS
  } 
     from "./actionTypes";

let nextId = 0;





export const isHidden = () => ({
    type: IS_HIDDEN, 
    payload: { isHidden }



});
    
export const isCheckedTemp = ()=> {
    return {
    type: IS_CHECKED_TEMP, 
    payload: { isCheckedTemp } 
    }

};
export const loadWeather = (isLoaded) => {
       
  return async dispatch => {
      await axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
          .then(response => {
            let weather = response.data.list
            console.log("weatherAxios", weather)
              dispatch({
                  type: LOAD_WEATHER,
                  payload: {weather}
              })
              dispatch({
                  type: LOAD_WEATHER,
                  payload: {isLoaded}
                })
          })
          .catch(err => {
              console.log(err)
          })
         
  }

}
 export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });



export const fetchFiveDayData = (weather) => {
 
      console.log("weather", weather)
      
      function fiveDayData(weather, item, index ) {

        //first item
       const currentDate = item.dt_txt.split(' ')[0]
        //next item
       const nextDate = weather[index + 1].dt_txt.split(' ')[0]
      //  console.log(weather[index + 1].dt_txt.split(' ')[0])
      //  console.log(item.dt_txt.split(' ')[0])

      if( currentDate !== nextDate){
           fiveDayData.push(item)
      
      }else if (fiveDayData.length === 5 ){

        return {
          type: FIVE_DAY_DATA,
          payload: {fiveDayData}
        }
      }
      return fiveDayData
    }
   
  
    console.log("fiveDayData", fiveDayData)
 
   }


   export const fetchOneDayWeatherData = (weather)=>{
   let oneDayWeatherData = weather.map(item => 

      item.dt_txt.split(' ')[1] === "00:00:00" &&  item 
        
    
    )
    return {
      type: ONE_DAY_WEATHER_DATA,
      payload: {oneDayWeatherData}
   }
  
  }

  export const loadEightTimesData = (oneDayWeatherData) => {
 
    

     const  eightTimesData = oneDayWeatherData.map(item => {
    
    
        if (eightTimesData === []){
            eightTimesData.push(item.dt_txt.split(' ')[0])
        }else if(eightTimesData[0] === item.dt_txt.split(' ')[0]){
            eightTimesData.push(item.dt_txt.split(' ')[0])
        } else if (eightTimesData[0] !== item.dt_txt.split(' ')[0]){
           return eightTimesData
        } 
        return eightTimesData
        }
      )
     
    return {
      type: LOAD_EIGHT_TIMES_DATA,
      payload: {eightTimesData}
    }
  }
  
  

let threeHourData = []

export function graphDateClicked(i, weather){

    weather.map((cardItem, index)=> {

        if(i === index || index < i+7){

            threeHourData.push(cardItem)
        }
        if(threeHourData.length === 8){
        threeHourData =[...threeHourData, cardItem]
        console.log("threeHourDataLength", threeHourData.length)

        }
        return threeHourData
 
      })
  return {
    type: GRAPH_DATE_CLICKED,
    payload: {threeHourData}
  }
}





export function getPlayers(fiveDayData, _localItems){
 
  console.log("fiveDayDataInGetPlayers", fiveDayData)
   _localItems = fiveDayData.map((_localItem) => {
        
            let key = v4()
            let celcius = Math.floor(_localItem.main.temp - 273.15)
            let fahrenheit = Math.floor((_localItem.main.temp - 273.15)* 9/5 + 32)
            let date = _localItem.dt_txt.split(' ')[0]
            let desc = _localItem.weather[0].main

             return { player: {
                key: key,
                celcius: celcius,
                fahrenheit: fahrenheit,
                date: date,                               
                desc: desc,
                image: require(`"/src/redux/reducers/assets/${_localItem.weather[0].main}_Munich.jpg"`),
            
                }
              }
             
           
            }
            )
            return {
              type: _LOCAL_ITEMS,
              payload: { _localItems }
            }

         

          }